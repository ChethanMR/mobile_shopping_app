import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { CartIcon } from "../Icons/Icons";
const Navbar = () => {
  // const amount = useSelector((state) => state.cart.amount);
  const { amount } = useSelector((state) => state.cart);

  // console.log(amount);
  return (
    <div className="nav_bar">
      <h2>Redux Toolkit</h2>
      <div className="nav-container">
        {/* <span className="material-symbols-outlined">local_mall</span> */}
        <CartIcon />
        <p className="super">{amount}</p>
      </div>
    </div>
  );
};

export default Navbar;
