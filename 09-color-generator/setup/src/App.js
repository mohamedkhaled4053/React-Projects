import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  let [color, setColor] = useState("");
  let [list, setList] = useState(new Values("#f15025").all(10));
  let [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      setList(new Values(color).all(10));
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            className={error ? "error" : "false"}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} />
        ))}
      </section>
    </>
  );
}

export default App;
