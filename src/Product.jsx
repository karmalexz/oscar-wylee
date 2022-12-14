import React from "react";
import ProductImage from "./assets/product.jpg";
import Zoom from "./assets/search-heart.svg";
import "./Product.css";
import Zip from "./assets/zip-logo.svg";
import Amber from "./assets/colour1.png";
import Pink from "./assets/colour2.png";
import Mashmellow from "./assets/colour3.png";
import Spearmint from "./assets/colour4.png";
const Product = () => {
  return (
    <div className="product-main">
      <div className="mobile-product-title">
        <h3 className="mobile-product-name">MARCO</h3>
        <h3>2 pairs from $199</h3>
        <p>Discount auto-applied at checkout</p>
      </div>
      <div className="product-left">
        <img className="product-image" src={ProductImage} alt="glasses image" />
        <p className="zoom">
          Zoom <img className="zoom-icon" src={Zoom} alt="zoom icon" />
        </p>
        <div className="carousel">
          <input type="radio" name="pick" checked="true" />
          <input type="radio" name="pick" />
          <input type="radio" name="pick" />
          <input type="radio" name="pick" />
          <input type="radio" name="pick" />
        </div>
      </div>
      <div className="product-right">
        <div className="product-title-wrapper">
          <p className="product-title">2 pairs from $199</p>
          <p className="discount">Discount auto-applied at checkout</p>
        </div>
        <h2>Gaby</h2>
        <p className="color">
          <span className="color-bold">Color: </span>Tabby Tortoise
        </p>
        <img src={Amber} alt="Amber color" className="colour-picking" />
        <img src={Pink} alt="Pink color" className="colour-picking" />
        <img
          src={Mashmellow}
          alt="Mashmellow color"
          className="colour-picking"
        />
        <img src={Spearmint} alt="Spearmint color" className="colour-picking" />
        <div className="price-tag">
          <p className="price-from">From $199.00</p>
          <p className="zip-statement">
            or ZIP it from <span className="zip-price">$10/week</span> with{" "}
            <img src={Zip} alt="zip pay logo" className="zip-logo" />
          </p>
        </div>
        <div className="button-group">
          <button className="prescription-button">Prescription</button>
          <button className="book-button">Book an eye test</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
