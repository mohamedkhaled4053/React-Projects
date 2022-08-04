import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(0);

  let user = people[index];
  let { name, job, image, text } = user;

  function randomIndex() {
    let randomIndex = Math.round(Math.random() * (people.length - 1));
    setIndex(randomIndex);
  }

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
      setIndex(index-1);
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={next}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={prev}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomIndex}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
