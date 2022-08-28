import React, { useState, useContext, useEffect } from 'react';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // states
  let [query, setQuery] = useState({
    amount: 5,
    category: 'sports',
    difficulty: 'easy',
  });
  let [loading, setLoading] = useState(false);
  let [quiz, setQuiz] = useState({
    show: false,
    questions: [],
    index: 0,
    isEnd: false,
  });
  let [error, setError] = useState(false);

  // effects
  // get data when loading
  useEffect(() => {
    let url = `${API_ENDPOINT}amount=${query.amount}&category=${
      table[query.category]
    }&difficulty=${query.difficulty}&type=multiple`;

    // only get data while loading 
    if (loading) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          // if response begin quiz and remove error alert if any
          if (res.response_code === 0) {
            setQuiz({
              ...quiz,
              show: true,
              questions: res.results,
              isEnd: false,
              index: 0,
            });
            setError(false)
          } else {
            setError(true);
          }
        })
        .catch((err) => setError(true))
        // cancel loading at the end of request
        .finally(() => setLoading(false));
    }
    
    // eslint-disable-next-line
  }, [loading]);

  return (
    <AppContext.Provider
      value={{
        table,
        query,
        setQuery,
        loading,
        setLoading,
        quiz,
        setQuiz,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
