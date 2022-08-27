import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
const Home = () => {
  return (
    <main>
      <form class="search-form">
        <h2>search movies</h2>
        <input type="text" class="form-input" value="batman" />
      </form>
      <section class="movies">
        <Movies />
      </section>
    </main>
  );
};

export default Home;
