import InitialListMovie from "./InitialListMovie";

export default function InitialList({ movies }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <InitialListMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
