// import { Dispatch } from "redux";

// interface Account {
//   balance: number;
//   loan: number;
//   loanPurpose: string;
// }

// const initialStateAccount: Account = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// enum ActionType {
//   DEPOSIT = "account/deposit",
//   WITHDRAW = "account/withdraw",
//   LOAN = "account/loan",
//   PAY_LOAN = "account/payLoan",
// }

// interface Deposit {
//   type: ActionType.DEPOSIT;
//   payload: number;
// }

// interface Withdraw {
//   type: ActionType.WITHDRAW;
//   payload: number;
// }
// interface Loan {
//   type: ActionType.LOAN;
//   payload: { loan: number; purpose: string };
// }
// interface PayLoan {
//   type: ActionType.PAY_LOAN;
//   payload: number;
// }

// // we need to create a type
// type Action = Deposit | Withdraw | Loan | PayLoan;

// const;

// interface Action{
//   type:string,
//   payload<T,U,V>: {
//     T value:string,

//   }
// }

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// Account Reducer
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/loan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan + action.payload.loan,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.loan,
      };
    case "account/payLoan":
      if (state.loan - action.payload == 0) {
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - action.payload,
        };
      } else
        return {
          ...state,
          loan: state.loan - action.payload,
          balance: state.balance - action.payload,
        };

    default:
      return state;
  }
}

// Action Creators
const deposit = (value) => {
  return { type: "account/deposit", payload: value };
};
// const deposit = (value: number) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.DEPOSIT,
//       payload: value,
//     });
//   };
// };

const withdraw = (value) => {
  return { type: "account/withdraw", payload: value };
};
const loan = (loan, purpose) => {
  return {
    type: "account/loan",
    payload: { loan, purpose },
  };
};
const payLoan = (value) => {
  return { type: "account/payLoan", payload: value };
};

export { deposit, withdraw, loan, payLoan };
