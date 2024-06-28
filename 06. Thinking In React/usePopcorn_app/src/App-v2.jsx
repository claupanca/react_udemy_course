import { useState } from "react";
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

export default function App() {
  return (
    <div className="app">
      <Navbar>
        <Logo />
        <Search />
        <FoundItems movies={tempMovieData} />
      </Navbar>

      <MainScreen>
        <Box>
          <InitialList movies={tempMovieData} />
          {/* We have created a HIGHLY reusable and flexible UserRating component with different props for the user */}
          <UserRating maxRating={10} color="red" size="24px" />
          <UserRating maxRating={5} defaultRating={3} />
          <UserRating color="pink" size="48px" defaultRating={2} />
          {/* The next one will throw an error since we are not passing a NUMBER as maxRating, as stated into the UserRating component with propTypes */}
          {/* <UserRating maxRating={"sss"} color="red" size="24px" /> */}
        </Box>

        <Box>
          <Summary movies={tempWatchedData} />
          <WatchList movies={tempWatchedData} />
        </Box>
        {/* <InitialBox foundItems={tempMovieData} />
        <WatchBox /> */}
      </MainScreen>
    </div>
  );
}
