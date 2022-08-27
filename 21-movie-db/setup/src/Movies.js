import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const noImg =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  let { loading, movies } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies.map(({imdbID: Id,Title, Year, Type ,Poster}) => (
        <Link key={Id} className="movie" to={`/movies/${Id}`}>
          <article>
            <img
              src={Poster !== 'N/A'? Poster : noImg}
              alt={Title}
            />
            <div className="movie-info">
              <h4 className="title">{Title}</h4>
              <p>{Year}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Movies;
