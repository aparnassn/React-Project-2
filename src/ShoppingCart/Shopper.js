import { Link } from "@reach/router";
import React from "react";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";


function Shopper() {

  return (
  <div>
    <h2>
        <Link to="/">Electronics Shop</Link>
    </h2>
    <h4>
        <Link to="/">Home</Link>
    </h4>
    <h4>
        <Link to="/signup">SignUp</Link>
    </h4>
    <h4>
        <Link to="/"><TiShoppingCart /></Link>
    </h4>
  </div>
  
  );
}
export default Shopper;
