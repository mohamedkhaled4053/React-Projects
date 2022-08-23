import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [query, setQuery] = useState('')


  let {loading, drinks} = useFetch(url, query)


  
  return <AppContext.Provider value={{loading, drinks}}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
