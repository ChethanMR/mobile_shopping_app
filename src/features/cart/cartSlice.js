import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

// export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
//   try {
//     const response = await fetch(url);
//     return await response.json();
//   } catch (error) {
//     return console.log(error);
//   }
// });
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increase: (state, action) => {
      const { id } = action.payload;
      // find method to find the item
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const { id } = action.payload;
      // find method to find the item
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateAmount: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state) => {
  //     state.isLoading = false;
  //   },
  // },
});
export const { clearCart, removeItem, increase, decrease, calculateAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
