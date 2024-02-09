import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModel } from "../../features/modal/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="modal">
        <h3>Remove all items from your cart ?</h3>
        <div className="btn-container">
          <button
            className="confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModel());
            }}
          >
            confirm
          </button>
          <button className="cancel-btn" onClick={() => dispatch(closeModel())}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
