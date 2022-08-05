import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  let [users, setUsers] = useState([]);
  let [currentUser, setCurrentUser] = useState('')
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res)
        setCurrentUser(res[0].company)
        setLoading(false)
      });
  }, []);
  if(loading){
    return <section className="section">
      <h1 style={{textAlign: 'center'}}>Loading...</h1>
    </section>
  }
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div class="btn-container">
          {users.map((user) => (
            <button key={user.id} class={`job-btn ${(currentUser === user.company)? 'active-btn': 'false'}`}>
              {user.company}
            </button>
          ))}
        </div>
      </div>

      

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
