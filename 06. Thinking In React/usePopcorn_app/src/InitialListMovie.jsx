export default function InitialListMovie({ movie, onClick }) {
  function handleSelectMovie() {
    onClick(movie);
  }

  return (
    <li key={movie.imdbID} onClick={handleSelectMovie}>
      <img src={movie.Poster} />
      <h3>{movie.Title}</h3>
      <p>📅{movie.Year}</p>
    </li>
  );
}
