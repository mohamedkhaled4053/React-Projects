import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  let [users, setUsers] = useState([]);
  let [currentUser, setCurrentUser] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setCurrentUser(res[0]);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <section className="section">
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      </section>
    );
  }
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div class="btn-container">
          {users.map((user) => (
            <button
              key={user.id}
              class={`job-btn ${
                currentUser.company === user.company ? "active-btn" : "false"
              }`}
              onClick={() => setCurrentUser(user)}
            >
              {user.company}
            </button>
          ))}
        </div>

        <article class="job-info">
          <h3>{currentUser.title}</h3>
          <h4>{currentUser.company}</h4>
          <p class="job-date">{currentUser.dates}</p>
          {currentUser.duties.map((duty) => (
            <div class="job-desc">
              <FaAngleDoubleRight />
              <p>
                {duty}
              </p>
            </div>
          ))}
        </article>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
