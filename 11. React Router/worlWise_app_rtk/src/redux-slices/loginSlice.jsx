import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  dbEmail: "test@test.com",
  dbPass: "test",
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

        // check credentials
        if (
          action.payload.email !== currState.dbEmail ||
          action.payload.password !== currState.dbPass
        )
          alert("Wrong Credentials. Try Again");
        else currState.isAuth = true;
      },
    },
    logOut(currState, action) {
      currState.isAuth = false;
    },
  },
});

export default login.reducer;

export const { logIn, logOut } = login.actions;
