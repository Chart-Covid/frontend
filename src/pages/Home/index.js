import React, { Component } from 'react';

import Navbar from "../../components/Navbar/index";
import Top10 from "../../components/Top10/index";

import "./styles.scss";

class Home extends Component {
  render() {
    return (
      <>
        <main className="container">

          {/* mapa */}
          <section className="home__map">
            <Navbar />
            <h1>mapa 🌍</h1>
            <Top10 />
          </section>
          {/* mapa */}

          {/* data */}
          <section className="home__data">
            <p>Búscador</p>
            <h1>País</h1>
            <div className="card card__infected">
              <p>Total de casos infectados</p>
              <h1>0</h1>
            </div>
            <div className="card card__activeCases">
              <p>Casos activos</p>
              <h1>0</h1>
            </div>
            <div className="card card__deadths">
              <p>Total de muertes</p>
              <h1>0</h1>
            </div>
            <div className="card card__recovered">
              <p>Total de recuperados</p>
              <h1>0</h1>
            </div>
            <div className="card card__data">
              <p>Gráfico</p>
            </div>
            <p className="termsAndConditions">
              <a href="/">Términos y condiciones</a>
            </p>
            <p className="copyrigths">
              <a href="/">@Copyright 2020</a>
            </p>
          </section>
          {/* data */}

        </main>
      </>
    );
  }
};

export default Home