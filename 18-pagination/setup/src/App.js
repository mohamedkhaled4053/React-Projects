import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  let { loading, data } = useFetch();
  let [pageIndex, setPageIndex] = useState(1);

  let numberOfPages = Math.ceil(data.length / 10);
  let showenData = data.slice(pageIndex * 10 - 10, pageIndex * 10);

  function changePage(e) {
    setPageIndex(Number(e.target.textContent))
  }

  function prev() {
    if (pageIndex === 1) {
      setPageIndex(numberOfPages)
    } else{
      setPageIndex(pageIndex - 1)
    }
  }

  function next() {
    if (pageIndex === numberOfPages) {
      setPageIndex(1)
    } else{
      setPageIndex(pageIndex + 1)
    }
  }
  

  if (loading) {
    return (
      <div className="section-title">
        <h1>loading</h1>
        <div className="underline"></div>
      </div>
    );
  }
  let a = 20;
  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {showenData.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prev}>prev</button>

          {Array.from({ length: numberOfPages }, (v, i) => (
            <button
              className={`page-btn ${i + 1 === pageIndex && 'active-btn'}`}
              onClick={changePage}
            >
              {i + 1}
            </button>
          ))}

          <button className="next-btn" onClick={next}>next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
