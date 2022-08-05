import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data";
function App() {
  let [index, setIndex] = useState(0);

  function next() {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function prev() {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
      {people.map((user) => (
        <article>
          <img
            src={user.image}
            alt={user.name}
            className="person-img"
          />
          <h4>{user.name}</h4>
          <p className="title">{user.title}</p>
          <p className="text">
              {user.quote}
          </p>
          <FaQuoteRight />
        </article>
      ))}

      <button className="prev">
        <FiChevronLeft />
      </button>
      <button className="next">
        <FiChevronRight />
      </button>
      </div>


    </section>
  );
}

export default App;
