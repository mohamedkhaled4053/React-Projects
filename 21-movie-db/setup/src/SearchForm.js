import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  let {query, setQuery ,error} = useGlobalContext()
  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input type="text" className="form-input" value={query} onChange={(e)=>setQuery(e.target.value)} />
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SearchForm;
