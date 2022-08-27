import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

const SingleMovie = () => {
  let [loading, setLoading] = useState(true);
  let [movie, setMovie] = useState({});

  let { id } = useParams();
  let url = API_ENDPOINT + `&i=${id}`;
  const noImg =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

  useEffect(() => {
    let mounted = true;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (mounted) {
          setLoading(false);
          setMovie(res);
        }
      });

    return () => {
      mounted = false;
    };
  });

  if (loading) {
    return <div className="loading"></div>;
  }

  let { Title, Plot, Year, Poster } = movie;
  return (
    <section className="single-movie">
      <img src={Poster !== 'N/A'? Poster : noImg} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
