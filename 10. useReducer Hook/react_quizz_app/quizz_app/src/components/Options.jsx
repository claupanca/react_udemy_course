import { useQuizz } from "../context/QuizzContext";

export default function Options() {
  const { questions, current, dispatch, answer } = useQuizz();

  const question = questions[current];

  return (
    <div className="options">
      {question.options.map((item, index) => (
        <button
          key={item}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={answer !== null ? true : false}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
