import React from "react";

import Navbar from "../../components/Navbar/index"

import './styles.scss'

// import './scss/Variables.scss'

export const Home = () => {
  return (
    <>
      <main className="container">
        <section className="home__map">
          <Navbar />
          <h1>Aquí va el mapa</h1>
        </section>
        <section className="home__data">
          <h1>Aquí va la data</h1>
        </section>
      </main>
    </>
  );
};
