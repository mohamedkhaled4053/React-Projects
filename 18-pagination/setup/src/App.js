import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  let { loading, data } = useFetch();

  if (loading) {
    return (
      <div class="section-title">
        <h1>loading</h1>
        <div class="underline"></div>
      </div>
    );
  }

  return (
    <main>
      <div class="section-title">
        <h1>pagination</h1>
        <div class="underline"></div>
      </div>
      <section class="followers">
        <div class="container">
          {data.map((follower) => (
            <Follower />
          ))}
        </div>
        <div class="btn-container">
          <button class="prev-btn">prev</button>
          <button class="page-btn active-btn">1</button>
          <button class="page-btn null">2</button>
          <button class="page-btn null">3</button>
          <button class="page-btn null">4</button>
          <button class="page-btn null">5</button>
          <button class="page-btn null">6</button>
          <button class="page-btn null">7</button>
          <button class="page-btn null">8</button>
          <button class="page-btn null">9</button>
          <button class="page-btn null">10</button>
          <button class="next-btn">next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
