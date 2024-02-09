import { useEffect } from "react";
import "./App.css";
import CartContainer from "./components/cart container/CartContainer";
import Navbar from "./components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateAmount } from "./features/cart/cartSlice";
import Modal from "./components/modal/Modal";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.model);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateAmount());
  }, [cartItems]);
  return (
    <div className="App">
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
