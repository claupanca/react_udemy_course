export default function ProgressBar({
  questions = 0,
  current = 0,
  points = 0,
  total = 0,
}) {
  return (
    <div className="progress">
      <progress value={current} max={15}></progress>
      <h4>
        Question {current}/{questions}
      </h4>
      <h4>
        {points}/{total} Points
      </h4>
    </div>
  );
}
