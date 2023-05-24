import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../tshirt/Tshirt";
import Cart from "../cart/Cart";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    // console.log(tshirt);

    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      alert("already added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveItem = (tshirt) => {
    // console.log(tshirt);
    const remaining = cart.filter((ts) => tshirt._id !== ts._id);
    setCart(remaining);
  };

  return (
    <div className="homeContainer">
      <div className="tshirtContainer">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cartContainer">
        <Cart cart={cart} handleRemoveItem={handleRemoveItem} />
      </div>
    </div>
  );
};

export default Home;
