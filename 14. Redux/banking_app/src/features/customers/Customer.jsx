import { useSelector } from "react-redux";

function Customer() {
  const name = useSelector((store) => store.customer.name);

  console.log("name", name);

  return <h2>👋 Welcome, {name}</h2>;
}

export default Customer;