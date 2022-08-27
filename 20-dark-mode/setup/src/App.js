import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  return (
    <main>
      <nav>
        <div class="nav-center">
          <h1>overreacted</h1>
          <button class="btn">toggle</button>
        </div>
      </nav>
      <section class="articles">
        {data.map(article => <Article key={article.id} {...article}/>)}
      </section>
    </main>
  );
}

export default App;
