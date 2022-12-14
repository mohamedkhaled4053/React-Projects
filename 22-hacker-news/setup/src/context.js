import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const AppContext = React.createContext();

const initialState = {
  loading: true,
  articles: [],
  query: 'react',
  page: 0,
  totalPages: 0,
};

const AppProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let mounted = true;

    let url = API_ENDPOINT + `query=${state.query}&page=${state.page}`;

    dispatch({ type: SET_LOADING, payload: true });
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (mounted) {
          dispatch({ type: SET_STORIES, payload: res });
        }
      });

    return () => {
      mounted = false;
    };
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
