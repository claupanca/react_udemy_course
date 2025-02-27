import { combineReducers, createStore } from "redux";

// In this file we will keep just the Root Reducer and the store
// for future, we can also split the rootReducer into it's file

// reducers
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

// action creators
import {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "./features/account/accountSlice";
import { newCustomer, updateName } from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

// console.log("an empty store", store.getState());

// store.dispatch(deposit(100));
// console.log("after deposit", store.getState());

// store.dispatch(newCustomer("Claudiu", 1234));
// console.log("new customer", store.getState());

// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialStateCustomer = {
//   name: "",
//   id: 0,
//   createdAt: "",
// };

// // Account Reducer
// function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };
//     case "account/withdraw":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     case "account/loanRequest":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: state.loan + action.payload.loan,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.loan,
//       };
//     case "account/payLoan":
//       if (state.loan - action.payload == 0) {
//         return {
//           ...state,
//           loan: 0,
//           loanPurpose: "",
//           balance: state.balance - action.payload,
//         };
//       } else
//         return {
//           ...state,
//           loan: state.loan - action.payload,
//           balance: state.balance - action.payload,
//         };

//     default:
//       return state;
//   }
// }

// // Customer Reducer
// function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/newCustomer":
//       return {
//         ...state,
//         name: action.payload.name,
//         id: action.payload.id,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         name: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// // We create the root reducer
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// // We pass the ROOT REDUCER into the store
// const store = createStore(rootReducer);

// // store.dispatch({ type: "account/deposit", payload: 500 });

// // console.log(store.getState());

// // store.dispatch({ type: "account/withdraw", payload: 20 });

// // console.log("account withdraw", store.getState());

// // store.dispatch({
// //   type: "account/loanRequest",
// //   payload: { loan: 1000, purpose: "new car" },
// // });

// // console.log("lone request", store.getState());

// // store.dispatch({
// //   type: "account/payLoan",
// //   payload: 900,
// // });

// // console.log("loan pay", store.getState());

// // Action Creators
// // function that create functions
// // we will create one action creator for each function
// const deposit = (value) => {
//   return { type: "account/deposit", payload: value };
// };
// const withdraw = (value) => {
//   return { type: "account/wihdraw", payload: value };
// };
// const requestLoan = (loan, purpose) => {
//   return {
//     type: "account/loanRequest",
//     payload: { loan, purpose },
//   };
// };
// const payLoan = (value) => {
//   return { type: "account/payLoan", payload: value };
// };

// store.dispatch(deposit(100));
// store.dispatch(deposit(1000));
// store.dispatch(requestLoan(1230, "buy a car"));
// console.log("account after deposit", store.getState().account);

// //

// //

// //
// // Customer Action Creators
// const newCustomer = (name, id) => {
//   return {
//     type: "customer/newCustomer",
//     payload: { name, id, createdAt: new Date().toISOString() },
//   };
// };

// const updateName = (name) => {
//   return {
//     type: "customer/updateName",
//     payload: name,
//   };
// };

// store.dispatch(newCustomer("Claudiu", 123));
// console.log("the customer is", store.getState().customer);
