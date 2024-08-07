//
// we import all reducers from their slices
import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// we combine the reducers into the rootStore
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//  we create the SINGLE SOURCE OF TRUTH
const store = createStore(rootReducer);

export default store;
