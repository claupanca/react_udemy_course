import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";

import store from "./store";

import {
  deposit,
  withdraw,
  loan,
  payLoan,
} from "./features/account/accountSlice";
import { useSelector } from "react-redux";

function App() {
  store.dispatch(deposit(1000));

  console.log("store after deposit", store.getState());

  const customer = useSelector((store) => store.customer);
  console.log("customer", customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer.name == "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
