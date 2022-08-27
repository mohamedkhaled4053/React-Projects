import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  let [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDark')) || false
  );

  useEffect(() => {
    document.documentElement.className = isDark ? 'dark-theme' : 'light-theme';
    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={() => setIsDark(!isDark)}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
