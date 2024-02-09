import React from "react";
import "./CartContainer.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart item/CartItem";
import { clearCart } from "../../features/cart/cartSlice";
import { openModel } from "../../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(cartItems, amount, total);
  if (!amount) {
    return (
      <>
        <h1>YOUR BAG</h1>
        <h3>is currently empty</h3>
      </>
    );
  }
  return (
    <div className="container">
      <header>
        <h2>YOUR BAG</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span> ${total}</span>
          </h4>
        </div>
        <button
          className="clear-cart"
          onClick={() => {
            dispatch(openModel());
          }}
        >
          CLEAR CART
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;
