export default function Welcome({ onStartClick }) {
  return (
    <div className="start">
      <h2> Welcome to The React Quiz!</h2>
      <h4>X questions to test your React memory</h4>
      <button className="btn" onClick={onStartClick}>
        Let's Start!
      </button>
    </div>
  );
}
