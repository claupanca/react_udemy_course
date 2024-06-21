import WatchedListMovie from "./WatchedListMovie";

export default function WatchList({ movies }) {
  return (
    <ul className="list list-watched">
      {movies.map((movie) => (
        <WatchedListMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
