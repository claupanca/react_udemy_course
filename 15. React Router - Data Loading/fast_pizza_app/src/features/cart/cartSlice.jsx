import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialCartState = { cart: [] };

const cartReducer = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: {
      prepare(pizza, quantity) {
        return {
          payload: { pizza, quantity },
        };
      },
      reducer(currState, action) {
        const item = currState.cart.find(
          (item) => item.pizzaId === action.payload.pizza.id,
        );
        if (item) {
          item.quantity = item.quantity + action.payload.pizza.id;
          item.totalPrice = item.quantity * item.unitPrice;
        } else
          currState.cart = [
            ...currState.cart,
            {
              pizzaId: action.payload.pizza.id,
              name: action.payload.pizza.name,
              quantity: action.payload.quantity,
              unitPrice: action.payload.pizza.unitPrice,
              totalPrice:
                action.payload.pizza.unitPrice * action.payload.quantity,
            },
          ];
      },
    },
    deleteFromCart(currState, action) {
      currState.cart = currState.cart.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseQty(currState, action) {
      // console.log("action", action);
      currState.cart = currState.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.unitPrice,
          };
        } else return item;
      });
    },
    decreaseQty(currState, action) {
      // console.log("action", action);
      currState.cart = currState.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          if (item.quantity == 1) return item;
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.unitPrice,
          };
        } else return item;
      });
    },
    clearCart(currState) {
      currState.cart = [];
    },
  },
});

export default cartReducer.reducer;

export const {
  addToCart,
  deleteFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartReducer.actions;

// We can use this with useSelector to get some information
// We created them here so that we can use the in other places also
export function getTotalCartQuantity(state) {
  // console.log("state", state);
  return state.cart.cart.reduce((acc, item) => (acc = acc + item.quantity), 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce(
    (acc, item) => (acc = acc + item.totalPrice),
    0,
  );
}
