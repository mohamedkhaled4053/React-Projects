import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
function App() {
  return (
    <>
      <form class="search-form">
        <h2>search hacker news</h2>
        <input type="text" class="form-input" value="react" />
      </form>

      <div class="btn-container">
        <button>prev</button>
        <p>3 of 50</p>
        <button>next</button>
      </div>

      <Stories />
    </>
  );
}

export default App;
