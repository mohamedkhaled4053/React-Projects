import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  let [photos, setPhotos] = useState([]);
  // let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);
  console.log(`photos ${photos.length} and loading ${loading}`);

  let loadingContainer = useRef(null);

  function isInViewport(element) {
    let rec = element.getBoundingClientRect();
    return rec.bottom < window.innerHeight;
  }

  useEffect(() => {
    let pageParam = `page=${photos.length/ 10 + 1}`;
    let firstUrl = mainUrl + clientID + '&' + pageParam;
    if (loading) {
      fetch(firstUrl)
        .then((res) => res.json())
        .then((res) => {
          setPhotos([...photos, ...res]);
          setLoading(false);
        });
    }
  }, [loading]);

  useEffect(() => {
    let mounted = true;

    document.addEventListener('scroll', () => {
      if (isInViewport(loadingContainer.current)) {
        setLoading(true)
      }

      return () => {
        mounted = false;
      };
    });
  }, []);

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            // value=""
          />
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => (
            <Photo key={photo.id} {...photo} />
          ))}
        </div>
        <h2 className="loading" ref={loadingContainer}>
          Loading...
        </h2>
      </section>
    </main>
  );
}

export default App;
