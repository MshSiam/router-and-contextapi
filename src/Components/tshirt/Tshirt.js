import React from "react";
import "./tshirt.css";

const Tshirt = ({ tshirt }) => {
  const { _id, name, price, picture } = tshirt;

  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h3>name : {name}</h3>
      <p>price : ${price}</p>
      <button type="">Add to Cart</button>
    </div>
  );
};

export default Tshirt;
