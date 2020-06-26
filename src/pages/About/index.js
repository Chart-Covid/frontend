import React from "react";
import "./styles.scss";

import NavbarTwo from "../../components/NavBarTwo";
import AboutUs from "../../components/AboutUs";

export const About = () => {
  return (
    <main className="containerTwo">
      <section>
        <NavbarTwo />
      </section>
      <section>
        <AboutUs />
      </section>
    </main>
  );
};

export default About;
