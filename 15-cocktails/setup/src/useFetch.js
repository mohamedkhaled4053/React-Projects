import {useState, useEffect} from 'react'

function useFetch(url, query) {
    let [loading, setLoading] = useState(true);
    let [drinks, setDrinks] = useState([]);

    useEffect(() => {
      let mounted = true

      setLoading(true)
      fetch(url + query)
        .then((res) => res.json())
        .then((res) => {
          if (mounted) {
            setDrinks(res.drinks);
            setLoading(false);
          }
        });

        return ()=>{
          mounted = false
        }
    },[url,query]);
    return {loading, drinks}
  }

  export default useFetch