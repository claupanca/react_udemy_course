import { configureStore } from "@reduxjs/toolkit";

import cities from "./redux-slices/citiesSlice";
import login from "./redux-slices/loginSlice";

const store = configureStore({
  reducer: {
    cities: cities,
    login: login,
  },
});

export default store;
