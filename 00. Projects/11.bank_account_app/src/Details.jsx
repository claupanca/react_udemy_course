export default function Details({ balance, loan }) {
  return (
    <div className="details">
      <h2>Balance: {balance}</h2>
      <h2>Loan: {loan ? 5000 : 0}</h2>
    </div>
  );
}
