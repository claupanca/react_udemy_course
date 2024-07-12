export default function Question() {
  return (
    <div>
      <h3>Question</h3>
      <div className="options">
        <button className="btn btn-option correct">Opt1</button>
        <button className="btn btn-option wrong">Opt2</button>
        <button className="btn btn-option answer">Opt3</button>
        <button className="btn btn-option">Opt4</button>
      </div>
      <button className="btn btn-ui">Next</button>
    </div>
  );
}
