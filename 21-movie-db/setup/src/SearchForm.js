import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input type="text" className="form-input" value="batman" />
    </form>
  );
};

export default SearchForm;
