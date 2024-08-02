export default function Welcome({ numberOfQuestions, onStartClick }) {
  return (
    <div className="start">
      <h2> Welcome to The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React memory</h3>
      <button className="btn" onClick={onStartClick}>
        Let's Start!
      </button>
    </div>
  );
}
