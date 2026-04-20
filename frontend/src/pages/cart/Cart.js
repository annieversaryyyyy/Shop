import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const user = useSelector((state) => state.users.user);

  return <div>Cart</div>;
}

export default Cart;
