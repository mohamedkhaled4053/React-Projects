import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  return (
    <a class="movie" href="/movies/tt0372784">
      <article>
        <img
          src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          alt="Batman Begins"
        />
        <div class="movie-info">
          <h4 class="title">Batman Begins</h4>
          <p>2005</p>
        </div>
      </article>
    </a>
  );
};

export default Movies;
