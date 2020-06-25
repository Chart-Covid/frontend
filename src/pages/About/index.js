import React from "react";
import "./styles.scss";

import NavbarTwo from "../../components/NavBarTwo/index.js";
import AboutUs from "../../components/AboutUs/index.js";

export const About = () => {

    return (
        <>
        <main className="containerTwo">
        <section>
        <NavbarTwo />
        </section>
        <section>
        <AboutUs />
        </section>
        </main>
        </>
        )
}

export default About


