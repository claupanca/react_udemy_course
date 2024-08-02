export default function ProgressBar({
  numberOfQuestions = 0,
  current = 0,
  points = 0,
  total = 0,
}) {
  return (
    <div className="progress">
      <progress value={current} max={numberOfQuestions}></progress>
      <p>
        Question <b>{current}</b>/{numberOfQuestions}
      </p>
      <p>
        <b>{points}</b>/{total} Points
      </p>
    </div>
  );
}
