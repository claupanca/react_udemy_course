import { useSelector } from "react-redux";

const Customer: React.FC = () => {
  const customerName = useSelector((store) => store.customer.name);

  // console.log("customer store", customerName);

  return <h2>👋 Welcome, {customerName}</h2>;
};

export default Customer;
