import React from "react";
import { Link } from "react-router-dom";
import logo from '../../src/assets/Petpooja.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link to="/dashboard" >
            <img
              src={logo}
              alt="logo"
              className="navbarlogo"
            />
          </Link>
          <Link to="/" className="navbar-brand navbarlogo" >
                    <img
                        src={logo}
                        alt="shop icon"
                        width="33px"
                        height="33px" />
                    Gmart
                </Link>
          <img
              src={logo}
              alt="logo"
              className="navbarlogo"
            />
        </div>
      </nav>
      <Link to="/login">
        <button className="btn btn-primary mx-2">Login</button>
      </Link>
      <Link to="/order">
        <button className="btn btn-primary mx-2">Order</button>
      </Link>
      <Link to="/bill">
        <button className="btn btn-primary mx-2">Bill</button>
      </Link>
    </div>
    
  );
}

export default Navbar;
