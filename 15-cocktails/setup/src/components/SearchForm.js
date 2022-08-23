import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  let { query, setQuery } = useGlobalContext();

  let searchInput = React.useRef(null)
  useEffect(()=>{
    searchInput.current.focus()
  })

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
