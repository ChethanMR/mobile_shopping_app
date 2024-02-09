import React from "react";
import "./CartItem.css";
import { IncreaseIcon, DecreaseIcon } from "../Icons/Icons";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
const CartItem = ({ id, title, price, img, amount }) => {
  //   console.log(id, title, price, img, amount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="item-container">
        <div className="img-title">
          <img
            src={img}
            alt={title}
            style={{ width: "85px", height: "85px" }}
          />
          <div className="details-container">
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
            <button
              className="remove"
              onClick={() => dispatch(removeItem({ id }))}
            >
              remove
            </button>
          </div>
        </div>
        <div className="btns-container">
          <button className="up" onClick={() => dispatch(increase({ id }))}>
            <IncreaseIcon />
          </button>
          <p className="amount">{amount}</p>
          <button
            className="down"
            onClick={() => {
              // when we click the btn where its amount is one, then remove
              if (amount === 1) {
                dispatch(removeItem({ id }));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <DecreaseIcon />
          </button>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default CartItem;
