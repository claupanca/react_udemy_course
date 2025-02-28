import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/account/accountSlice - rtk";
import customerReducer from "../src/features/customer/customerSlice";

console.log("accountReducer", accountReducer);

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    // we can also pass a rootReducer that is a combineReducer({reducers})
  },
});

console.log(store.getState());

export default store;
export const RootState = store.getState;
