import React from "react";
import "./cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy somethings</p>;
  } else {
    message = <p>Thanks for buying</p>;
  }
  return (
    <div>
      <h3 className={cart.length === 0 ? "" : "orange"}>Order Summery</h3>
      <h5>Order Quantity : {cart.length}</h5>

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveItem(tshirt)} type="">
            x
          </button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>well done</p> : ""}
      {cart.length === 4 && <p>congrats !!</p>}
    </div>
  );
};

export default Cart;
