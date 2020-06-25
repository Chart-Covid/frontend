import React from "react";

import "./styles.scss";
import logo from "../../assets/logo.svg";

const NavbarTwo = () => {
    return (
        <header className="navbarTwo">
            <div className="navbar__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar__about">
                <h1>Home</h1>
            </div>
        </header>
    );
};

export default NavbarTwo