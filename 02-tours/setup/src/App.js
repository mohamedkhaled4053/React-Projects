import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  let [tours, setTours] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setTours(res));
  }, []);

  return (
    <main>
      {!tours ? <Loading /> : <Tours tours={tours} setTours={setTours} />}
    </main>
  );
}

export default App;
