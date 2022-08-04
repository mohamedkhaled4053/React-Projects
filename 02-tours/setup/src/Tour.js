import React, { useState } from "react";

const Tour = ({ tour, tours, setTours }) => {
    let [seeMore, setSeeMore] = useState(false)

    function removeTour(id) {
      let newTours = tours.filter(t=> t.id != id)
      setTours(newTours)
    }

  return (
    <article className="single-tour">
      <img src={tour.image} />
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
        <button className="delete-btn" onClick={()=>removeTour(tour.id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
