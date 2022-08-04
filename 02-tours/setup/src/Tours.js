import React from "react";
import Tour from "./Tour";
import "./index.css";

const Tours = ({ tours, setTours }) => {
  return (
    <section>
      <div className = 'title'>
      <h2>Our Tours</h2>
      <div className="underline"></div>
      </div>
      <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tours={tours} tour={tour} setTours={setTours}/>
      ))}
      </div>
    </section>
  );
};

export default Tours;
