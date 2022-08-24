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
  let [user, setUser] = useState({ name: 'random name' });
  let [showen, setShowen] = useState('name');

  function getUser() {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // get data that we need with destructuring
        let {
          name: { first, last },
          email,
          registered: { age },
          location: {
            street: { number, name: streetName },
          },
          phone,
          password,
          picture: { thumbnail: img },
        } = res.results[0];
        // get full name and full street address
        let name = first + ' ' + last;
        let street = number + ' ' + streetName;

        setUser({ name, email, age, street, phone, password, img });
        setLoading(false);
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
            src={user.img || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {showen} is</p>
          <p className="user-value">{user[showen]}</p>
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
          <button className="btn" type="button" onClick={getUser}>
            {loading ? 'loading' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
