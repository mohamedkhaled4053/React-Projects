import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Refresh from "./Refresh";
import "./index.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  let [tours, setTours] = useState([]);
  let [loading, setLoading] = useState(true);

 async function getData() {
    setLoading(true);
    
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setTours(res);
    //     setLoading(false);
    //   });

    let res = await fetch(url)
    res = await res.json()
    setTours(res)
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  function removeTour(id) {
    let newTours = tours.filter((t) => t.id != id);
    setTours(newTours);
  }

  return (
    <main>
      {loading ? (
        <Loading />
      ) : tours.length !== 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <Refresh getData={getData} />
      )}
    </main>
  );
}

export default App;
