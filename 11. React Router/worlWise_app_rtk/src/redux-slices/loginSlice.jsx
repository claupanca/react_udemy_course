import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  email: "test@test.com",
  pass: "test",
};

const login = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    // login recieves pass and email so we have to prepare the data
    logIn: {
      prepare(email, password) {
        return {
          payload: { email, password },
        };
      },
      reducer(currState, action) {
        console.log("currState", action);
        console.log("action", action);
        currState.isAuth = true;
      },
    },
    logout(currState, action) {
      currState.isAuth = false;
    },
  },
});

export default login.reducer;

export const { logIn } = login.actions;
