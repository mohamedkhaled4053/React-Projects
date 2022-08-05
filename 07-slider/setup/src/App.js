import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
      {data.map((user) => (
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
