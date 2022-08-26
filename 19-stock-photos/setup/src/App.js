import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  let [photos, setPhotos] = useState([])

  useEffect(()=>{
    let firstUrl = mainUrl + clientID
    fetch(firstUrl).then(res => res.json()).then(res => setPhotos(res))
  },[])

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value=""
          />
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map(photo => <Photo key={photo.id} {...photo}/>)}
        </div>
        <h2 className="loading">Loading...</h2>
      </section>
    </main>
  );
}

export default App;
