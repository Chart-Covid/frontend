import React from "react";

import Navbar from "../../components/Navbar/index"
import MapContainer from "../../components/Map/Map";

import './styles.scss'

// import './scss/Variables.scss'

export const Home = () => {
  return (
    <>
      <main className="container">
        <section className="home__map">
          <Navbar />
          <MapContainer />
        </section>
        <section className="home__data">
          <h1>Aquí va la data</h1>
        </section>
      </main>
    </>
  );
};
