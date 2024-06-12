export default function Stats({ statistics }) {
  return (
    <div className="stats">
      <h3>{`You have ${statistics[0]} items and you are ${Math.ceil(
        (statistics[1] * 100) / statistics[0]
      )} % packed`}</h3>
    </div>
  );
}
