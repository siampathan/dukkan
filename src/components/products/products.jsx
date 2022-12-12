//import { useState } from "react";
//import ProductPage from "../../pages/productpage/productpage";
import Test from "../test/test";
import "./products-style.css";

const Products = () => {
  return (
    <div className="products">
      <div className="header">
        <p className="title">All Orders (112)</p>
        <input
          type="text"
          placeholder="Order id, mobile number or a name"
          className="input"
        />
      </div>
      <div className="wrap">
        <Test />
        {/* <ProductPage /> */}
      </div>
    </div>
  );
};

export default Products;
