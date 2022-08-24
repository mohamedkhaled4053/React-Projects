import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  let { loading, data } = useFetch();

  if (loading) {
    return (
      <div className="section-title">
        <h1>loading</h1>
        <div className="underline"></div>
      </div>
    );
  }

  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => (
            <Follower />
          ))}
        </div>
        <div className="btn-container">
          <button className="prev-btn">prev</button>
          <button className="page-btn active-btn">1</button>
          <button className="page-btn null">2</button>
          <button className="page-btn null">3</button>
          <button className="page-btn null">4</button>
          <button className="page-btn null">5</button>
          <button className="page-btn null">6</button>
          <button className="page-btn null">7</button>
          <button className="page-btn null">8</button>
          <button className="page-btn null">9</button>
          <button className="page-btn null">10</button>
          <button className="next-btn">next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
