import { useState, useEffect } from "react";

//  we use this to extract the whole Fetch of data logic from the main Component

export default function useMovies(search, key) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // An async function created out of the before promise
  useEffect(() => {
    console.log("search", search);
    //  We createa new Abort Controller to control the fetch requests
    const controller = new AbortController();
    async function getMovies() {
      try {
        // we are setting the loading to true
        setLoading(true);
        setError("");
        //  to use the controller, we pass a new param to the Fetch API
        // signal
        const res = await fetch(
          `http://omdbapi.com/?s=${search}&apikey=${key}`,
          { signal: controller.signal }
        );
        // we can check if the response is ok or if it's a error
        if (!res.ok) {
          throw new Error("Data not available");
        }
        const data = await res.json();
        console.log("data", data);
        // we account if there is no movie returned
        if (data.Response === "False") {
          setMovies([]);
          throw new Error("No movies Available");
        }
        setMovies(data.Search);
        //  we set the Loading to False
        setLoading(false);
      } catch (err) {
        // console.log("error", err);
        console.log("error message", err.message);
        setError(err.message);
      }
    }
    // if the search length if less than 3, we don't display movies nor error
    if (search.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    getMovies();
    // we are using the Cleanup Function to ABORT THE fetch
    return () => {
      // cleanup function that is ABORTING the fetch of data
      console.log("cleanup running");
      controller.abort();
    };
    // we are using the dependency Array to monitor the search state
  }, [search]);

  return { movies, loading, error };
}
