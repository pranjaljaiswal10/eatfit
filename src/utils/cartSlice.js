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
    increaseQuantity: (state) => {
      state.items.forEach((item) => item.quantity++);
    },

    decreaseQuantity: (state) => {
      state.items.forEach((item) => {
        if (item.quantity > 0) {
          item.quantity--;
        }
      });
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
