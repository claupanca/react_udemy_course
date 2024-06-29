export default function Summary({ movies }) {
  function avgRatings(criteria) {
    return movies.length === 0
      ? 0
      : movies.reduce((acc, item) => acc + Number(item[`${criteria}`]), 0) /
          movies.length;
  }

  function avgRuntime(movies) {
    return movies.length === 0
      ? 0
      : movies.reduce(
          (acc, item) => acc + Number(item.Runtime.split(" ")[0]),
          0
        );
  }

  const avgRatingImdb = avgRatings("imdbRating").toFixed(1);
  const avgUserRating = avgRatings("userRating").toFixed(1);
  const Runtime = avgRuntime(movies).toFixed(1);

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          #️⃣{movies.length} {movies.length === 1 ? "movie" : "movies"}
        </p>
        <p>⭐{avgRatingImdb}</p>
        <p>🌟{avgUserRating}</p>
        <p>⏳{Runtime}</p>
      </div>
    </div>
  );
}
