export default function WatchedListMovie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} />
      <h3>{movie.Title}</h3>
      <div>
        <p>⭐{movie.imdbRating}</p>
        <p>🌟{movie.userRating}</p>
        <p>⏳ {movie.Runtime}</p>
      </div>
    </li>
  );
}
