import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {};

const cartReducer = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducer: {
    addToCart(currState, action) {
      console.log("currState", currState);
      console.log("action", action);
      return null;
    },
  },
});

export default cartReducer.reducer;

export const { addToCart } = cartReducer.actions;
