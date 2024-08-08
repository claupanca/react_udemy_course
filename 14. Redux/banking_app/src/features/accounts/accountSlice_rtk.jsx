import { createSlice } from "@reduxjs/toolkit";

// account initial state
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// RTK
const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAccount,
  reducers: {
    // Without THUNK
    deposit(currState, action) {
      currState.balance = currState.balance + action.payload;
      currState.isLoading = false;
    },

    // With Thunk we use the same as above, but we also add our export function
    // deposit below the declaration of the reducer

    withdraw(currState, action) {
      if (action.payload <= currState.balance)
        currState.balance = currState.balance - action.payload;
    },
    //

    // While sending a {} as action
    // requestLoan(currState, action) {
    //   // console.log("currState", currState);
    //   // console.log("action", action);
    //   if (currState.loan === 0) {
    //     currState.loan = action.payload.loanAmount;
    //     currState.loanPurpose = action.payload.loapPurpose;
    //     currState.balance = currState.balance + action.payload.loanAmount;
    //   }
    // },

    // while preparing the data and send multiple params
    requestLoan: {
      prepare(loanAmount, loanPurpose) {
        return {
          payload: { loanAmount, loanPurpose },
        };
      },
      reducer(currState, action) {
        if (currState.loan === 0) {
          currState.loan = action.payload.loanAmount;
          currState.loanPurpose = action.payload.loapPurpose;
          currState.balance = currState.balance + action.payload.loanAmount;
        }
      },
    },
    payLoan(currState, action) {
      if (currState.balance >= currState.loan) {
        currState.balance = currState.balance - currState.loan;
        currState.loan = 0;
        currState.loanPurpose = "";
      }
    },
    loading(currState, action) {
      currState.isLoading = true;
    },
  },
});

console.log("accountSlice", accountSlice);

//  Export default for the Reducer
export default accountSlice.reducer;

// named exports for the actions
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// THUNK FUNCTION
export function deposit(amount, currency) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: amount };
  }
  return async function (dispatch, getState) {
    dispatch({ type: "account/loading" });

    const res = await fetch(
      `https://api.fxratesapi.com/convert?from=${currency}&to=USD&places=2&amount=${amount}`
    );
    const data = await res.json();

    dispatch({ type: "account/deposit", payload: data.result });
  };
}

// Redux only
/*
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
*/
