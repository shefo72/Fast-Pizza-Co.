import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// export actions for use in components to dispatch
export const {
  addItem,
  deleteItem,
  incItemQuantity,
  decItemQuantity,
  clearCart,
} = cartSlice.actions;

// export for use in store
export default cartSlice.reducer;

// Selectors (best to put in a separate file, but for simplicity, we keep them here)
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, current) => acc + current.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, current) => acc + current.totalPrice, 0);

export const getCurrentQuantity = (pizzaId) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0;
