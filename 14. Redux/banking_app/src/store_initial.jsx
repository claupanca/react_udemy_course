//  we use this to create the state store
import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// new State for Customer
const initialStateCustomer = {
  name: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(currState = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...currState, balance: currState.balance + action.payload };
    case "account/withdraw":
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

// const store = createStore(accountReducer);

// WE COMBINE THE REDUCERS
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

//

//

//

store.dispatch({ type: "account/deposit", payload: 300 });

console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 5000, loanPurpose: "personal" },
});

console.log(store.getState());
//

//

//

//   ACTION CREATORS
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

//

// using the Action Creators
console.log("deposit 780 with action Creator");
store.dispatch(deposit(780));
console.log(store.getState());

console.log("withdraw 80");
store.dispatch(withdraw(80));
console.log(store.getState());

console.log("payloaN");
store.dispatch(payLoan());
console.log(store.getState());

//

//

//

// new action Creators for the Customer
function addNewCustomer(name, nationalID) {
  return {
    type: "customer/add",
    payload: { name, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(name) {
  return { type: "customer/updateName", payload: name };
}

// customer reducer
function customerReducer(currState = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/add":
      return {
        ...currState,
        name: action.payload.name,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...currState, name: action.payload };

    default:
      return currState;
  }
}
//

// customer Store
// we have combined the reducer above, at line 41
// const customerStore = createStore(customerReducer);

// add new customer
store.dispatch(addNewCustomer("Claudiu", 12345));
console.log("new customer \n", store.getState());

// update the customer
store.dispatch(updateName("Andrei"));
console.log("Updted name \n", store.getState());
