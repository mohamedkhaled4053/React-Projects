import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const AppContext = React.createContext();

const initialState = { loading: true, articles: [], query: 'react', page: 0, totalPages : 0 };

const AppProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    let url = API_ENDPOINT + `query=${state.query}&page=${state.page}`;

    dispatch({type: SET_LOADING, payload: true})
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch({type: SET_STORIES, payload: res})
        dispatch({type: SET_LOADING, payload: false})
      });
  }, [ state.page]);

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
