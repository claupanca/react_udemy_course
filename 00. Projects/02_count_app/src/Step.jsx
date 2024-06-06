export default function Step({ step, handleClick }) {
  function clickHandler(e) {
    console.log("click handler");
    handleClick(e);
  }

  return (
    <div className="info">
      <button onClick={clickHandler} data-action="-">
        -
      </button>
      <p>Steps: {step}</p>
      <button onClick={clickHandler} data-action="+">
        +
      </button>
    </div>
  );
}
