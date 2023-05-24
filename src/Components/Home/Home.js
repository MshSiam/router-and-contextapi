import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../tshirt/Tshirt";
import Cart from "../cart/Cart";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div className="homeContainer">
      <div className="tshirtContainer">
        {tshirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
        ))}
      </div>
      <div className="cartContainer">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
