import React, { useEffect, useState } from "react";
import publicIp from 'public-ip';
import Axios from "axios";

import Navbar from "../../components/Navbar/index";
import MapContainer from "../../components/Map/Map";
import Chart from "../../components/Chart";
import Search from "../../components/Search/index";
import Top10 from "../../components/Top10/index";

import Datos from "../../coordenadas.json";
import "./styles.scss";

export const Home = () => {
  const [country, setCountry] = useState('Pais');
  const [countryFlag, setCountryFlag] = useState('');
  const [casos, setCasos] = useState({});
  useEffect(() => {
    async function fetchData() {
      const ip = await publicIp.v4();
      const pais = await Axios.get(`http://www.geoplugin.net/json.gp?ip=${ip}`)
        .then(response => response.data.geoplugin_countryName)
        .catch(error => console.error(error))
      setCountry(pais);

      const flag = Datos.filter(dato => dato.name === pais);
      setCountryFlag(flag[0].flag);

      const casos = await Axios.get(`https://chart-covid.herokuapp.com/countries/${pais}/`)
        .then(response => response.data)
        .catch(error => console.error(error))
      setCasos(casos);
    }
    fetchData();
  },[])
  return (
    <>
      <main className="container">
        <section className="home__map">
          <div className="home__map--navbar">
            <Navbar />
          </div>
          <div className="home__map--mapContainer">
            <MapContainer Datos={Datos} />
          </div>
          <div className="home__map--top">
            <Top10 />
          </div>
        </section>
        <section className="home__data">
          <div className="home__data--search">
            <Search />
          </div>
          <div className="home__data--countryContainer">
            <h1 className="home__data--country">{country}</h1>
            <img className="home__data--flag" src={countryFlag} alt="Flag country"/>
          </div>
          <div className="card__container">
            <div className="card__container--infected">
                <p>Total de casos infectados</p>
                <h1>{casos.total_cases}</h1>
            </div>
            <div className="card__container--activeCases">
              <p>Casos activos</p>
              <h1>{casos.active_cases}</h1>
            </div>
            <div className="card__container--deaths">
              <p>Total de muertes</p>
              <h1>{casos.total_deaths}</h1>
            </div>
            <div className="card__container--recovered">
              <p>Total de recuperados</p>
              <h1>{casos.total_Recovered}</h1>
            </div>
          </div>
          <div className="home__data--chart">
            <Chart historical={casos.historical} />
          </div>
          {/* <p className="termsAndConditions">
            <a href="/">Términos y condiciones</a>
          </p>
          <p className="copyrigths">
            <a href="/">@Copyright 2020</a>
          </p> */}
        </section>
      </main>
    </>
  );
};

export default Home