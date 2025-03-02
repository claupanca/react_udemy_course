import Options from "./Options";
import { useQuizz } from "../context/QuizzContext";

export default function Question() {
  const { questions, dispatch, current, answer } = useQuizz();

  const question = questions[current];
  const lastQuestion = current === questions.length - 1;

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />

      {/* if the last question is displayed, we don't show the Next button */}
      {!lastQuestion
        ? answer != null && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next
            </button>
          )
        : answer != null && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "stopQuizz" })}
            >
              Finish
            </button>
          )}
    </div>
  );
}
