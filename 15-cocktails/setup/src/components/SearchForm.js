import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label for="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
