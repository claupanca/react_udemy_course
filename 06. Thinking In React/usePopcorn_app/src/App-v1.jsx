import { useEffect, useState, useRef } from "react";
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
import SelectedMovie from "./SelectedMovie";

import API from "../config";
import useMovies from "./useMovies";
import useSessionStorage from "./useSessionStorage";
import useKey from "./useKey";

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
  //

  //

  // Commented state is extracted into the useMovies custom Hook

  // const [movies, setMovies] = useState([]);

  // Extracted into useSessionStorage custom Hook
  // we use a CALLBACK to get the watched data from Storage, on the INITIAL RENDER
  // const [watched, setWatched] = useState(() => getWatched());

  // call the custom hook
  const [watched, setWatched] = useSessionStorage([]);

  // we use this state to display a loading Indicator while the data is being fetched
  // const [loading, setLoading] = useState(false);

  // we use another piece of state to store the error message
  // const [error, setError] = useState(null);

  //  we LIFTED the search state so that we can synchronize everything
  const [search, setSearch] = useState("");

  // piece of state when we select a movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Extracted into the useKey custom hook
  //  ref has been lifted up from Search Component
  // const input = useRef(null);

  //  call the cusom hook with the keyCode = 13 (Enter)
  const input = useKey(13);

  // let's say we want to COUNT how many times the user selects a rating
  // this will be stored in the backend but not showed on front end
  // so we are not using a state
  const ratingCount = useRef([]);

  // This will run only at the initial RENDER ([]) and will fetch data
  // useEffect(() => {
  //   fetch(`http://omdbapi.com/?s='strange'&apikey=${KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.Search));
  // }, []);

  //

  //

  //

  // WE HAVE EXTRACTED THIS INTO THE useMOVIES custom HOOK
  // //An async function created out of the before promise
  // useEffect(() => {
  //   console.log("search", search);

  //   //  We createa new Abort Controller to control the fetch requests
  //   const controller = new AbortController();

  //   async function getMovies() {
  //     try {
  //       // we are setting the loading to true
  //       setLoading(true);
  //       setError("");

  //       //  to use the controller, we pass a new param to the Fetch API
  //       // signal
  //       const res = await fetch(
  //         `http://omdbapi.com/?s=${search}&apikey=${KEY}`,
  //         { signal: controller.signal }
  //       );

  //       // we can check if the response is ok or if it's a error
  //       if (!res.ok) {
  //         throw new Error("Data not available");
  //       }

  //       const data = await res.json();

  //       console.log("data", data);

  //       // we account if there is no movie returned
  //       if (data.Response === "False") {
  //         setMovies([]);
  //         throw new Error("No movies Available");
  //       }

  //       setMovies(data.Search);
  //       //  we set the Loading to False
  //       setLoading(false);
  //     } catch (err) {
  //       // console.log("error", err);
  //       console.log("error message", err.message);
  //       setError(err.message);
  //     }
  //   }

  //   // if the search length if less than 3, we don't display movies nor error
  //   if (search.length < 3) {
  //     setMovies([]);
  //     setError("");
  //     return;
  //   }

  //   getMovies();

  //   // we are using the Cleanup Function to ABORT THE fetch
  //   return () => {
  //     // cleanup function that is ABORTING the fetch of data
  //     console.log("cleanup running");
  //     controller.abort();
  //   };

  //   // we are using the dependency Array to monitor the search state
  // }, [search]);

  //

  // Use the Custom Hook - useMovies
  // this hook return 3 items
  const { movies, loading, error } = useMovies(search, KEY);

  function handleSelectMovie(movie) {
    console.log("THis movie is selected", movie.imdbID);

    async function getSelectedMovie() {
      const response = await fetch(
        `http://omdbapi.com/?i=${movie.imdbID}&apikey=${KEY}`
      );
      const data = await response.json();
      console.log("MOVIEE", data);
      setSelectedMovie(data);
    }

    getSelectedMovie();
  }

  // we are using this to Change the title of the page
  // this is a Side Effect so we have to use useEffect to INTERACT with the real world
  useEffect(() => {
    document.title = selectedMovie
      ? `Movie: ${selectedMovie.Title}`
      : "usePopcorn";
  }, [selectedMovie]);

  function handleAddWatched(userRating) {
    console.log(
      "This is the user rating ",
      userRating,
      " for this movie ",
      selectedMovie
    );

    //  we are going to update the ratingCount REF here
    // console.log("rating count", ratingCount);
    if (
      ratingCount.current.filter((item) => item.id === userRating).length > 0
    ) {
      ratingCount.current = ratingCount.current.map((item) => {
        // console.log("id", item.id === userRating);
        // console.log("item", item);
        if (item.id === userRating) {
          // console.log("we are here", item.count + 1);
          // console.log({ ...item, count: item.count + 1 });
          return { ...item, count: item.count + 1 };
        } else return item;
      });
    } else {
      console.log("we are here 1");
      ratingCount.current = [
        ...ratingCount.current,
        { id: userRating, count: 1 },
      ];
    }

    setWatched(
      (prevState) => {
        if (
          prevState.filter((item) => item.imdbID === selectedMovie.imdbID)
            .length > 0
        ) {
          return prevState.map((item) =>
            item.imdbID === selectedMovie.imdbID
              ? { ...selectedMovie, userRating: userRating }
              : item
          );
        } else
          return [...prevState, { ...selectedMovie, userRating: userRating }];
      }
      // prevState.map((item) =>
      //   item.imdbID === selectedMovie.imdbID
      //     ? { ...selectedMovie, userRating: userRating }
      //     : item
      // )
    );

    setSelectedMovie(null);
  }

  //  Extracted into Custom Hook - useSessionStorage
  // //  store the Watched data into the Storage everytime the watched piece of state is Updated
  // useEffect(() => {
  //   sessionStorage.setItem("watched", JSON.stringify(watched));
  // }, [watched]);

  // extreacted into the useKey custom hook
  // we use the useEffect to set a Listener on the document
  // useEffect(() => {
  //   function handleEnterKey(e) {
  //     // console.log("A key has been pressed", e);
  //     if (e.keyCode === 13) {
  //       console.log("Enter has been pressed");
  //       // we are using this REF to pass the focus() on the search element
  //       input.current.focus();
  //     }
  //   }

  //   document.addEventListener("keydown", handleEnterKey);

  //   // We have to CLEANUP THE EVENT LISTENER
  //   // since this will run on every rerender
  //   return function cleanup() {
  //     document.removeEventListener("keydown", handleEnterKey);
  //   };
  // }, []);

  return (
    <div className="app">
      <Navbar>
        <Logo />
        <Search search={search} setSearch={setSearch} inputElement={input} />
        <FoundItems movies={movies} />
      </Navbar>
      <MainScreen>
        <Box>
          {error ? (
            <ErrorMessage message={error} />
          ) : loading ? (
            <Loading />
          ) : (
            <InitialList
              movies={movies}
              handleSelectMovie={handleSelectMovie}
            />
          )}
          {/* We have created a HIGHLY reusable and flexible UserRating component with different props for the user */}
          <UserRating maxRating={10} color="red" size="24px" />
          <UserRating maxRating={5} defaultRating={3} />
          <UserRating color="pink" size="48px" defaultRating={2} />
          {/* The next one will throw an error since we are not passing a NUMBER as maxRating, as stated into the UserRating component with propTypes */}
          {/* <UserRating maxRating={"sss"} color="red" size="24px" /> */}
        </Box>

        <Box>
          {selectedMovie ? (
            <SelectedMovie
              selectedMovie={selectedMovie}
              handleBackButton={setSelectedMovie}
            >
              <UserRating
                maxRating={10}
                defaultRating={selectedMovie.userRating}
                onSetRating={handleAddWatched}
              />
            </SelectedMovie>
          ) : (
            <>
              <Summary movies={watched} />
              <WatchList movies={watched} />
            </>
          )}
        </Box>
        {/* <InitialBox foundItems={tempMovieData} />
        <WatchBox /> */}
      </MainScreen>
    </div>
  );
}
