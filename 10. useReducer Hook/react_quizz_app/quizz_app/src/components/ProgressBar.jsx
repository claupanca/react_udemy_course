import { useQuizz } from "../context/QuizzContext";

export default function ProgressBar() {
  const { questions, current, points } = useQuizz();

  const numberOfQuestions = questions.length;
  const total = questions.reduce((acc, item) => acc + item.points, 0);

  return (
    <div className="progress">
      <progress value={current + 1} max={numberOfQuestions}></progress>
      <p>
        Question <b>{current + 1}</b>/{numberOfQuestions}
      </p>
      <p>
        <b>{points}</b>/{total} Points
      </p>
    </div>
  );
}
