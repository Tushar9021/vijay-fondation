import React from "react";
import Logo from "../assets/images/logo2.png";
import { Link, NavLink } from "react-router-dom";
import Colors from '../constants/Colors'
const data='OwnService';
const commonActiveStyle = {
  fontWeight: "bold",
  color: Colors.primaryColor,
};

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-center"
          alt="Not Found"
        />
        <span className="brand-class">Digital E-Seva</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="selected"
              activeStyle={commonActiveStyle}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className="nav-link"
              activeClassName="selected"
              activeStyle={commonActiveStyle}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/contact-us/${data}`}
              className="nav-link"
              activeClassName="selected"
              activeStyle={commonActiveStyle}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
