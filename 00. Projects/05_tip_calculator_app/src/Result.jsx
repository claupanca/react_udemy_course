export default function Result({ bill, myReview, friendReview }) {
  const reviews = ((myReview + friendReview) / 2 / 100) * bill;
  const result = bill + reviews;

  return (
    <div className="result" style={{ margin: "2rem" }}>
      <h1>
        You pay ${result} (${bill} + ${reviews} tip)
      </h1>
    </div>
  );
}
