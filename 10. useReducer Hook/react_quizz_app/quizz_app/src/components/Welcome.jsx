import { useQuizz } from "../context/QuizzContext";

export default function Welcome() {
  const { questions, dispatch } = useQuizz();

  const numberOfQuestions = questions.length;

  return (
    <div className="start">
      <h2> Welcome to The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React memory</h3>
      <button className="btn" onClick={() => dispatch({ type: "startQuizz" })}>
        Let's Start!
      </button>
    </div>
  );
}
