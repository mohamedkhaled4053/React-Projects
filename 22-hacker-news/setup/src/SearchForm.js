import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  let {query, dispatch} = useGlobalContext()

  function handleChange(e) {
    dispatch({type: 'HANDLE_SEARCH', payload: e.target.value})
  }

  return (
    <form className="search-form">
      <h2>search hacker news</h2>
      <input type="text" className="form-input" value={query} onChange={handleChange}/>
    </form>
  );
};

export default SearchForm;
