import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  let [loading, setLoading] = useState(true);
  let [user, setUser] = useState(null);
  let [showen, setShowen] = useState('name');

  function getUser() {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // get data that we need with destructuring
        let {name, email, registered:{age}, location: {street}, phone, password } = res.results[0]
        
        setUser({name, email, age, street, phone, password})
        setLoading(false)
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src="https://randomuser.me/api/portraits/men/72.jpg"
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My age is</p>
          <p className="user-value">60</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <FaUser />
            </button>
            <button className="icon" data-label="email">
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age">
              <FaCalendarTimes />
            </button>
            <button className="icon" data-label="street">
              <FaMap />
            </button>
            <button className="icon" data-label="phone">
              <FaPhone />
            </button>
            <button className="icon" data-label="password">
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button">
            random user
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
