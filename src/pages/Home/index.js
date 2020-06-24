import React from "react";

import Navbar from "../../components/Navbar/index"
import MapContainer from "../../components/Map/Map";
import Chart from "../../components/Chart";
import Search from "../../components/Search/index";

import "./styles.scss";

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
          <Search />
          <h1>País</h1>
          <div className="card card__infected">
            <p>Card infectados totales</p>
          </div>
          <div className="card card__activeCases">
            <p>Card de indectados activos </p>
          </div>
          <div className="card card__deadths">
            <p>Card número de muertes totales</p>
          </div>
          <div className="card card__recovered">
            <p>Card recuperados totales</p>
          </div>
          <div className="card card__data">
            <Chart />
          </div>
          <p className="termsAndConditions">
            <a href="/">Términos y condiciones</a>
          </p>
          <p className="copyrigths">
            <a href="/">@Copyright 2020</a>
          </p>
        </section>
      </main>
    </>
  );
};
