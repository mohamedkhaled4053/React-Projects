import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  // states
  let [photos, setPhotos] = useState([]);
  let [loading, setLoading] = useState(true);
  let [query, setQuery] = useState('');

  // refs
  let loadingContainer = useRef(null);
  let searchContainer = useRef(null);

  // helper functions
  function isInViewport(element) {
    let rec = element.getBoundingClientRect();
    return rec.top < window.innerHeight;
  }

  function handleSubmit(e) {
    // when searching setQuery to searched text
    // and clear photos and begin loading
    e.preventDefault();
    setQuery(searchContainer.current.value);
    setLoading(true);
    setPhotos([]);
  }

  // effects
  useEffect(() => {
    let pageParam = `page=${photos.length / 10 + 1}`;
    let url;

    // only get new photos in loading state
    if (loading) {
      // if query use search link and if not use main link
      if (query) {
        let pageQuery = `query=${query}`;
        url = searchUrl + clientID + '&' + pageParam + '&' + pageQuery;
      } else {
        url = mainUrl + clientID + '&' + pageParam;
      }
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          // search link response is different from main link response
          if (query) {
            res = res.results
          }
          setPhotos([...photos, ...res]);
          setLoading(false);
        });
    }
  }, [loading]);

  useEffect(() => {
    // begin loading new photos if loading element in viewport
    document.addEventListener('scroll', () => {
      if (isInViewport(loadingContainer.current)) {
        setLoading(true);
      }
    });
  }, []);

  return (
    <main>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            className="form-input"
            ref={searchContainer}
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
