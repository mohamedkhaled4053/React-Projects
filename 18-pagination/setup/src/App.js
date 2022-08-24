import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  let { loading, data } = useFetch();
  let numberOfPages = Math.ceil(data.length/10)

  if (loading) {
    return (
      <div className="section-title">
        <h1>loading</h1>
        <div className="underline"></div>
      </div>
    );
  }
  let a = 20
  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => (
            <Follower key={follower.id} />
          ))}
        </div>
        <div className="btn-container">
          <button className="prev-btn">prev</button>
          {Array.from({ length: numberOfPages }, (v, i) => (
            <button className="page-btn">{i+1}</button>
          ))}

          <button className="next-btn">next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
