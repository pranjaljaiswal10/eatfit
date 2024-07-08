import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeItem: (state) => {
      state.items.pop();
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
    item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
     item.quantity--;
      }
  },
}
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
