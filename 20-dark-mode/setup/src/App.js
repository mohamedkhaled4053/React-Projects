import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  let [dark, setDark] = useState(true)
  
  useEffect(()=>{
    document.body.className = dark? 'dark-theme':'light-theme'
  })

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={()=>setDark(!dark)}>toggle</button>
        </div>
      </nav>
      <section className="articles">
        {data.map(article => <Article key={article.id} {...article}/>)}
      </section>
    </main>
  );
}

export default App;
