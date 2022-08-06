import React, { useState } from "react";
import data from "./data";

function App() {
  let [lorems, setLorems] = useState([]);
  let [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(num >=1){
      setLorems(data.slice(0, num));
    }else{
      setLorems(data.slice(0,1))
    }
  }

  return (
    <section class="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form class="lorem-form" onSubmit={handleSubmit}>
        <label for="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={num}
          onChange={handleChange}
        />
        <button class="btn">generate</button>
      </form>

      <article class="lorem-text">
        {lorems.map((lorem) => (
          <p>{lorem}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
