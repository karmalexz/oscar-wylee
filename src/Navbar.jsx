import React from "react";
import Logo from "./assets/OW-Logo-RGB.svg";
import Search from "./assets/search.svg";
import User from "./assets/user.svg";
import ShoppingCart from "./assets/shopping.svg";
import Hamberger from "./assets/hamburger-menu.png";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="mobile-navbar">
        <div className="mobile-title-background">
          <button className="mobile-booking">Book an eye test</button>
        </div>
        <div>
          <img src={Hamberger} alt="mobile nav icon" className="burger-icon" />
          <img src={Logo} className="mobile-logo" alt="Oscar Wylee logo" />
          <img
            className="mobile-cart"
            src={ShoppingCart}
            alt="shopping cart"
          ></img>
          <span className="mobile-cart-lable">2</span>
        </div>
      </nav>
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
        <img
          className="function-icon function-icon-search"
          src={Search}
          alt="search icon"
        />
        <img
          className="function-icon function-icon-user"
          src={User}
          alt="user icon"
        />
        {/* <div> */}
        <img
          className="function-icon function-icon-cart"
          src={ShoppingCart}
          alt="shopping cart"
        ></img>
        <span className="cart-lable">2</span>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
