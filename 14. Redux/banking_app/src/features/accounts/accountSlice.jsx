// account initial state
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// account reducer
export default function accountReducer(
  currState = initialStateAccount,
  action
) {
  switch (action.type) {
    case "account/deposit":
      return { ...currState, balance: currState.balance + action.payload };
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
    // in Redux, for default actions (errors) we just return the current state
    default:
      return currState;
  }
}

// account action creators
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
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
