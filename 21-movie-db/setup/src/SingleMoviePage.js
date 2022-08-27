import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

const SingleMovie = () => {
  return (
    <section className="single-movie">
      <img
        src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        alt="Batman Begins"
      />
      <div className="single-movie-info">
        <h2>Batman Begins</h2>
        <p>
          After training with his mentor, Batman begins his fight to free
          crime-ridden Gotham City from corruption.
        </p>
        <h4>2005</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
