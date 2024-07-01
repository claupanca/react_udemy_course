export default function SelectCurr({
  listOfCurrencies,
  currency = "EUR",
  onChange,
}) {
  function handleOnChange(e) {
    onChange(e.target.value);
  }
  return (
    <select value={currency} onChange={handleOnChange}>
      {Object.keys(listOfCurrencies).map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
