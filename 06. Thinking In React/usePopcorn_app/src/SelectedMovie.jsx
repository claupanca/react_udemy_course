import UserRating from "./UserRating";

export default function SelectedMovie({
  selectedMovie,
  handleBackButton,
  children,
}) {
  console.log("selectedMovie", selectedMovie);

  return (
    <div className="details">
      <header>
        <img src={selectedMovie.Poster} alt="movie poster"></img>
        <div className="details-overview">
          <h2>{selectedMovie.Title}</h2>
          <p>
            {selectedMovie.Released} • {selectedMovie.Runtime}
          </p>
          <p>{selectedMovie.Genre}</p>
          <p>⭐ {selectedMovie.imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        {children}
        <p>{selectedMovie.Plot}</p>
        <p>Starring {selectedMovie.Actors}</p>
        <p>Directed by {selectedMovie.Director}</p>
      </section>

      <button className="btn-back" onClick={() => handleBackButton(null)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </div>
  );
}
