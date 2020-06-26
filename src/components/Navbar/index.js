import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar__about">
        <Link to="/about">
          <h1>About</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
