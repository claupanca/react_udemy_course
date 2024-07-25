import Header from "./Header";
import Body from "./Body";
import Details from "./Details";
import Action from "./Action";
import { useReducer } from "react";

const initialState = {
  // account status: open, closed
  account: "closed",
  balance: 0,
  loan: false,
};

function reducer(currState, action) {
  console.log("currState", currState);
  console.log("action", action);

  switch (action.type) {
    case "openAccount":
      return { ...currState, account: "open", balance: 500 };

    case "add":
      return { ...currState, balance: currState.balance + 150 };

    case "withdraw":
      return {
        ...currState,
        balance:
          currState.balance < 50 ? currState.balance : currState.balance - 50,
      };

    case "loan":
      return { ...currState, balance: currState.balance + 5000, loan: true };

    case "payLoan":
      return {
        ...currState,
        balance:
          currState.balance - 5000 < 0
            ? currState.balance
            : currState.balance - 5000,
        loan: currState.balance - 5000 < 0 ? true : false,
      };

    case "closeAccount":
      return {
        ...currState,
        account: currState.balance == 0 ? "closed" : currState.account,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { account, balance, loan } = state;

  return (
    <div className="app">
      <Header />
      <Body>
        <Details balance={balance} loan={loan} />
        <Action
          actionText={"Open Account"}
          availability={account == "closed"}
          dispatch={() => dispatch({ type: "openAccount" })}
        />
        <Action
          actionText={"Deposit 150"}
          availability={account != "closed"}
          dispatch={() => dispatch({ type: "add" })}
        />
        <Action
          actionText={"Withdraw 50"}
          availability={account != "closed"}
          dispatch={() => dispatch({ type: "withdraw" })}
        />
        <Action
          actionText={"Request a loan of 5000"}
          availability={account != "closed" && loan != true}
          dispatch={() => dispatch({ type: "loan" })}
        />
        <Action
          actionText={"Pay Loan"}
          availability={account != "closed" && loan == true}
          dispatch={() => dispatch({ type: "payLoan" })}
        />
        <Action
          actionText={"Close Account"}
          availability={account != "closed"}
          dispatch={() => dispatch({ type: "closeAccount" })}
        />
      </Body>
    </div>
  );
}

export default App;
