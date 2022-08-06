import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  return (
    <section className="section-center">
      <form className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value="" />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>


      <List />

      <Alert />
    </section>
  );
}

export default App;
