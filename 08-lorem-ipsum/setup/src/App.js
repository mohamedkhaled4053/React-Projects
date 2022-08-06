import React, { useState } from "react";
import data from "./data";

function App() {
  let [lorems, setLorems] = useState([]);
  let [num, setNum] = useState(1);

  function handleChange(e) {
    let value = parseInt(e.target.value)
    if (value < 1) {
      setNum(1);
    }else if(value > 8){
      setNum(8)
    } else {
      setNum(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLorems(data.slice(0, num));
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
