export default function Satisfaction({ children, value, onValueChange }) {
  function handleChange(e) {
    const value = e.currentTarget.value;
    onValueChange((prevState) => +value);
  }

  return (
    <div className="satisfaction">
      <h2>{children}</h2>
      <select value={value} onChange={handleChange}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Amazing (20%)</option>
      </select>
    </div>
  );
}
