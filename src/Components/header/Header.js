import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
