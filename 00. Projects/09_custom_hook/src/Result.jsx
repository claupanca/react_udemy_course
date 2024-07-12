export default function Result({ loading, city, country }) {
  return (
    <h2>
      {loading ? (
        "Loading"
      ) : city ? (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${city},${country}`}
          target="blank"
        >
          Your Address: {city}, {country}
        </a>
      ) : null}
    </h2>
  );
}
