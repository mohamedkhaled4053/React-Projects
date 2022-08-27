import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [loading, setLoading] = useState(true);
  let [movies, setMovies] = useState([]);
  let [query, setQuery] = useState('batman');

  useEffect(() => {
    let url = API_ENDPOINT + `&s=${query}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        console.log(res.Search);
        setMovies(res.Search);
      });
  }, query);

  return (
    <AppContext.Provider value={{ loading, movies, query }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
