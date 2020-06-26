import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import logo from "../../assets/logo.svg";

const NavbarTwo = () => {
  return (
    <header className="navbarTwo">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar__about">
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
    </header>
  );
};

export default NavbarTwo;
