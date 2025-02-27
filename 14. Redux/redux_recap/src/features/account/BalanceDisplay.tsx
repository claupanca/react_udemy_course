import { useSelector } from "react-redux";

const formatCurrency: Function = (value: number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

function BalanceDisplay() {
  const accountBalance = useSelector((store) => store.account.balance);

  return <div className="balance">{formatCurrency(accountBalance)}</div>;
}

export default BalanceDisplay;
