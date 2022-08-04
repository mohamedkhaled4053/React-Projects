import React, { useState } from "react";

const Tour = ({ tour, tours, setTours }) => {
    let [seeMore, setSeeMore] = useState(false)


  return (
    <article className="single-tour">
      <img src='https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg' />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {seeMore? tour.info: tour.info.slice(0,200)}
          <button onClick={()=> setSeeMore(!seeMore)}> 
          {seeMore?'see less':'read more'}
          </button>
        </p>
        <button className="delete-btn" >not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
