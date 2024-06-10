export default function Count({ count, handleCountType, handleCountButtons }) {
  function handleCountInput(e) {
    if (!Number(e.currentTarget.value)) {
      alert("Numbers Only");
      return;
    }
    handleCountType(Number(e.currentTarget.value));
  }

  function handleCountAction(e) {
    const action = e.currentTarget.dataset.action;
    handleCountButtons(action);
  }

  return (
    <div className="count">
      <button data-action="-" onClick={handleCountAction}>
        -
      </button>
      <input value={count} onChange={handleCountInput}></input>
      <button data-action="+" onClick={handleCountAction}>
        +
      </button>
    </div>
  );
}
