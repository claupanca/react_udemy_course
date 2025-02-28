import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";

import store from "./store - classic";

// import {
//   deposit,
//   withdraw,
//   loan,
//   payLoan,
// } from "./features/account/accountSlice - classic";

import {
  deposit,
  withdraw,
  loan,
  payLoan,
  balanceSelector,
} from "./features/account/accountSlice - rtk";

import { useSelector } from "react-redux";

function App() {
  store.dispatch(deposit(1000));

  console.log("store after deposit", store.getState());

  // Already created the selector in the slice
  // const balance = useSelector(balanceSelector);
  // console.log("account balance", balance);

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
