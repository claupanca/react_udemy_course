export default function Summary({ movies }) {
  function avgRatings(criteria) {
    return (
      movies.reduce((acc, item) => acc + Number(item[`${criteria}`]), 0) /
      movies.length
    );
  }

  const avgRatingImdb = avgRatings("imdbRating");
  const avgUserRating = avgRatings("userRating");
  const avgRuntime = avgRatings("runtime");

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>#️⃣{movies.length} movies</p>
        <p>⭐{avgRatingImdb}</p>
        <p>🌟{avgUserRating}</p>
        <p>⏳{avgRuntime}</p>
      </div>
    </div>
  );
}
