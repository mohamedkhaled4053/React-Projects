import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [query, setQuery] = useState({
    amount: 5,
    category: 'sports',
    difficulty: 'easy',
  });
  let [loading, setLoading] = useState(false);
  let [quiz, setQuiz] = useState({ show: false, questions: [], index: 0 });

  useEffect(() => {
    let url = `${API_ENDPOINT}amount=${query.amount}&category=${table[query.category]}&difficulty=${query.difficulty}&type=multiple`;
    if (loading) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          if (res.response_code === 0) {
            setLoading(false);
            setQuiz({ ...quiz, show: true, questions: res.results });
          }
        });
    }
  }, [loading]);

  return (
    <AppContext.Provider
      value={{ table, query, setQuery, loading, setLoading, quiz }}
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
