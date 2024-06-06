export default function Count({ count, handleClick }) {
  function clickHandler(e) {
    handleClick(e);
  }

  return (
    <div className="info">
      <button onClick={clickHandler} data-action="-">
        -
      </button>
      <p>Count: {count}</p>
      <button onClick={clickHandler} data-action="+">
        +
      </button>
    </div>
  );
}
