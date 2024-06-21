export default function InitialListMovie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} />
      <h3>{movie.Title}</h3>
      <p>📅{movie.Year}</p>
    </li>
  );
}
