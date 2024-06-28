import InitialListMovie from "./InitialListMovie";

export default function InitialList({ movies, handleSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <InitialListMovie
          key={movie.imdbID}
          movie={movie}
          onClick={handleSelectMovie}
        />
      ))}
    </ul>
  );
}
