import { createSlice } from "@reduxjs/toolkit";

// import { RootState } from "../../store - rtk";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    loan(state, action) {
      if (loan > 0) return;
      state.balance = state.balance + action.payload.loan;
      state.loan = state.loan + action.payload.loan;
      state.loanPurpose = action.payload.loanPurpose;
    },
    payLoan(state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

// console.log("accountSlice rtk", accountSlice);

export default accountSlice.reducer;

// export const balanceSelector = (RootState) => RootState.balance;
export const { deposit, withdraw, loan, payLoan } = accountSlice.actions;
