//
// we import all reducers from their slices
import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { composeWithDevTools } from "@redux-devtools/extension";

import { thunk } from "redux-thunk";

// we combine the reducers into the rootStore
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//  we create the SINGLE SOURCE OF TRUTH

// Without devtools
// const store = createStore(rootReducer, applyMiddleware(thunk));

// With devTools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
