import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    model: modalReducer,
  },
});
export default store;
