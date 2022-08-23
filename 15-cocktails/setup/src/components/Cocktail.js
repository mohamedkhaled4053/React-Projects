import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = () => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt="A1"
        />
      </div>
      <div className="cocktail-footer">
        <h3>A1</h3>
        <h4>Cocktail glass</h4>
        <p>Alcoholic</p>
        <a className="btn btn-primary btn-details" href="/cocktail/17222">
          details
        </a>
      </div>
    </article>
  );
};

export default Cocktail;
