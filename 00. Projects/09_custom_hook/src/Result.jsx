export default function Result({ loading, city, country }) {
  return <h2>{loading ? "Loading" : `City: ${city}, Country: ${country}`}</h2>;
}
