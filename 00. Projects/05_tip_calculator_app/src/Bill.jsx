export default function Bill({ bill, onBillChange }) {
  function handleChange(e) {
    const value = e.currentTarget.value;

    if (!Number(value)) {
      alert("Please enter numbers only");
      return;
    }
    onBillChange((prevState) => Number(value));
  }

  return (
    <div className="bill">
      <h2>How much was the bill?</h2>
      <input value={bill} onChange={handleChange}></input>
    </div>
  );
}
