//
// we import all reducers from their slices
// import { applyMiddleware, combineReducers, createStore } from "redux";

// use configureStore instead of createStore
import { configureStore } from "@reduxjs/toolkit";

import account from "./features/accounts/accountSlice_rtk";
import customer from "./features/customers/customerSlice_rtk";

// import { composeWithDevTools } from "@redux-devtools/extension";

// import { thunk } from "redux-thunk";

// we combine the reducers into the rootStore
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

//  we create the SINGLE SOURCE OF TRUTH

// Without devtools
// const store = createStore(rootReducer, applyMiddleware(thunk));

// With devTools
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// With RTK
const store = configureStore({
  reducer: {
    account: account,
    customer: customer,
  },
});

export default store;
