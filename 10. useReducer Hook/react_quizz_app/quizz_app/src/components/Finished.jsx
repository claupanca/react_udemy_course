import { useQuizz } from "../context/QuizzContext";

export default function Finished() {
  const { questions, points, dispatch } = useQuizz();

  const total = questions.reduce((acc, item) => acc + item.points, 0);
  const percentage = Math.floor((points * 100) / total);

  return (
    <>
      <p className="result">
        <span>💥</span> Quizz Completed. You scored: {points} out of {total} (
        {percentage}%)
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
