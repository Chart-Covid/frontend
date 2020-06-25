import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/index";
import MapContainer from "../../components/Map/Map";
import Chart from "../../components/Chart";
import Search from "../../components/Search/index";
import Top10 from "../../components/Top10/index";

import Datos from "../../coordenadas.json";
import "./styles.scss";

export const Home = () => {
  useEffect(() => {
    if (navigator.geolocation) { //check if geolocation is available
        navigator.geolocation.getCurrentPosition(function(position){

          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        });
    }
  },[])
  return (
    <>
      <main className="container">
        <section className="home__map">
          <Navbar />
          <MapContainer Datos={Datos} />
          <Top10 />
        </section>
        <section className="home__data">
          <Search />
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
              <h1>1</h1>
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

export default Home