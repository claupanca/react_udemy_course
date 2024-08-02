export default function Finished({ points, maxPoints, dispatch }) {
  const percentage = Math.floor((points * 100) / maxPoints);
  return (
    <>
      <p className="result">
        <span>💥</span> Quizz Completed. You scored: {points} out of {maxPoints}{" "}
        ({percentage}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
