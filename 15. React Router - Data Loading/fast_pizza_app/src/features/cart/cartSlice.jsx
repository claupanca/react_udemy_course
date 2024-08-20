import { createSlice } from "@reduxjs/toolkit";

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
            quantity: item.quantity++,
            totalPrice: item.quantity++ * item.unitPrice,
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
            quantity: item.quantity--,
            totalPrice: item.quantity-- * item.unitPrice,
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
