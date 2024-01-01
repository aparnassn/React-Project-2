import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import "./Headerfile.css"

const Headerfile = () => {
  return (
    <div>
      <header className="header">
        <h1>
          <Link to="/" className="logo">
            Electronics Shop
          </Link>
        </h1>
        <h4><Link to="/" className="header-links">
            Home
          </Link>
          </h4>
        <h4><Link to="/" className="header-links">
            SignUp
          </Link></h4>
          <h2><Link to="/" className="header-links">
          <TiShoppingCart />
          </Link></h2>
          
      </header>
    </div>
  );
};

export default Headerfile;


