// account initial state
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// account reducer
export default function accountReducer(
  currState = initialStateAccount,
  action
) {
  console.log("currState", currState);
  console.log("action", action);

  switch (action.type) {
    case "account/deposit":
      return {
        ...currState,
        balance: currState.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      if (action.payload > currState.balance) return currState;
      return { ...currState, balance: currState.balance - action.payload };
    case "account/requestLoan":
      // loan can be requested only if there is no other loan in place
      if (currState.loan > 0) return currState;
      if (currState.loan == 0)
        return {
          ...currState,
          loan: action.payload.amount,
          loanPurpose: action.payload.loanPurpose,
          balance: currState.balance + action.payload.amount,
        };
    case "account/payLoan":
      if (currState.balance < currState.loan) return currState;
      return {
        ...currState,
        loan: 0,
        loanPurpose: "",
        balance: currState.balance - currState.loan,
      };

    case "account/loading":
      return { ...currState, isLoading: true };
    // in Redux, for default actions (errors) we just return the current state
    default:
      return currState;
  }
}

// account action creators
export function deposit(amount, currency = "USD") {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  else {
    // This is the THUNK
    return async function (dispatch, getState) {
      dispatch({ type: "account/loading" });
      //  API call
      let result;
      const res = await fetch(
        `https://api.fxratesapi.com/convert?from=${currency}&to=USD&places=2&amount=${amount}`
      );
      const data = await res.json();
      //
      //  action
      dispatch({ type: "account/deposit", payload: data.result });
    };
  }
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
