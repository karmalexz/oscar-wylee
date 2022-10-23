import React from "react";
import Logo from "./assets/OW-Logo-RGB.svg";
import Search from "./assets/search.svg";
import User from "./assets/user.svg";
import ShoppingCart from "./assets/shopping.svg";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} className="logo" alt="Oscar Wylee logo" />
      <ul className="menu">
        <li>Glasses</li>
        <li>Sunglasses</li>
        <li>Locations</li>
        <li>Eye Test Info</li>
        <li>Offers</li>
      </ul>
      <button className="booking">Book an eye test</button>
      <img className="function-icon" src={Search} alt="search icon" />
      <img className="function-icon" src={User} alt="user icon" />

      <img
        className="function-icon"
        src={ShoppingCart}
        alt="shopping cart"
      ></img>
      {/* <span className="cart-lable">2</span> */}
    </nav>
  );
};

export default Navbar;
