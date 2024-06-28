import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainScreen from "./MainScreen";

// NOT USED ANYMORE SINCE WE HAVE CREATED the BOX REUSABLE COMPONENT
import WatchBox from "./WatchBox";
import InitialBox from "./InitialBox";

import Logo from "./Logo";
import Search from "./Search";
import FoundItems from "./FoundItems";
import Box from "./Box";
import ToggleButton from "./ToggleButton";
import InitialList from "./InitialList";
import WatchList from "./WatchList";
import Summary from "./Summary";
import UserRating from "./UserRating";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

import API from "../config";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const KEY = API();

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);

  // we use this state to display a loading Indicator while the data is being fetched
  const [loading, setLoading] = useState(false);

  // we use another piece of state to store the error message
  const [error, setError] = useState(null);

  //  we LIFTED the search state so that we can synchronize everything
  const [search, setSearch] = useState("");

  // This will run only at the initial RENDER ([]) and will fetch data
  // useEffect(() => {
  //   fetch(`http://omdbapi.com/?s='strange'&apikey=${KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.Search));
  // }, []);

  // A async function created out of the promise
  useEffect(() => {
    console.log("search", search);
    async function getMovies() {
      // we are setting the loading to true
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `http://omdbapi.com/?s=${search}&apikey=${KEY}`
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
    // we are using the dependency Array to monitor the search state
  }, [search]);

  return (
    <div className="app">
      <Navbar>
        <Logo />
        <Search search={search} setSearch={setSearch} />
        <FoundItems movies={movies} />
      </Navbar>
      <MainScreen>
        <Box>
          {error ? (
            <ErrorMessage message={error} />
          ) : loading ? (
            <Loading />
          ) : (
            <InitialList movies={movies} />
          )}
          {/* We have created a HIGHLY reusable and flexible UserRating component with different props for the user */}
          <UserRating maxRating={10} color="red" size="24px" />
          <UserRating maxRating={5} defaultRating={3} />
          <UserRating color="pink" size="48px" defaultRating={2} />
          {/* The next one will throw an error since we are not passing a NUMBER as maxRating, as stated into the UserRating component with propTypes */}
          {/* <UserRating maxRating={"sss"} color="red" size="24px" /> */}
        </Box>

        <Box>
          <Summary movies={watched} />
          <WatchList movies={watched} />
        </Box>
        {/* <InitialBox foundItems={tempMovieData} />
        <WatchBox /> */}
      </MainScreen>
    </div>
  );
}
