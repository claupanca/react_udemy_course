interface Account{
  balance:number,
  loan:number,
  loanPurpose:string
}

const initialStateAccount:Account = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const 





interface Action{
  type:string,
  payload<T,U,V>: {
    T value:string,

  }
}

// Account Reducer
export default function accountReducer(
  state = initialStateAccount,
  action: { type: string; payload:  }
) {
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
    case "account/loanRequest":
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
const deposit = (value: number) => {
  return { type: "account/deposit", payload: value };
};
const withdraw = (value: number) => {
  return { type: "account/wihdraw", payload: value };
};
const requestLoan = (loan: number, purpose: string) => {
  return {
    type: "account/loanRequest",
    payload: { loan, purpose },
  };
};
const payLoan = (value: number) => {
  return { type: "account/payLoan", payload: value };
};

export { deposit, withdraw, requestLoan, payLoan };
