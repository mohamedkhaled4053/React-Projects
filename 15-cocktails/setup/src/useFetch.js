import {useState, useEffect} from 'react'

function useFetch(url, query) {
    let [loading, setLoading] = useState(true);
    let [drinks, setDrinks] = useState([]);

    useEffect(() => {
      fetch(url + query)
        .then((res) => res.json())
        .then((res) => {
          setDrinks(res.drinks);
          setLoading(false);
        });
    },[url,query]);
    return {loading, drinks}
  }

  export default useFetch