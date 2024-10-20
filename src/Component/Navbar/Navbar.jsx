import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Petpooja from "../../assets/Petpooja.png";

function Navbar() {
  return (
    <div className="container">
      <div className="row" id="header">
        <div className="col-md-4" id="logoheading">
          <Link to="/" className="nav-logo">
            <h3>Petpooja</h3>
          </Link>
        </div>
        <div className="col-md-8">
          <ul className="float-md-right" id="menu">
            <li>
              <Link to="" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
              >
                Start here!!
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />

    </div>
  );
}

export default Navbar;
