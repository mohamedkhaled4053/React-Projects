import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {


  let [list, setList] = useState(new Values('#f15025').all(10))

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input type="text" placeholder="#f15025" className="error"  />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => 
          <SingleColor key={index} {...color}/>
        )}
      </section>
    </>
  );
}

export default App;
