import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  let { query, setQuery } = useGlobalContext();

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
