import React, { useEffect, useState } from "react";
import publicIp from "public-ip";
import Axios from "axios";
import Context from "../../Context";

import Navbar from "../../components/Navbar/index";
import MapContainer from "../../components/Map/Map";
import Chart from "../../components/Chart";
import { Top10 } from "../../components/Top10";

import Datos from "../../coordenadas.json";
import "./styles.scss";

export const Home = () => {
  const [country, setCountry] = useState("Pais");
  const [countryFlag, setCountryFlag] = useState("");
  const [casos, setCasos] = useState({});
  const [topCountries, setTopCountries] = useState({});
  useEffect(() => {
    async function fetchData() {
      const top = await Axios.get(`https://chart-covid.herokuapp.com/top_ten/`)
        .then((response) => response.data["total-cases"])
        .catch((error) => console.error(error));
      setTopCountries(top);
      const ip = await publicIp.v4();
      const pais = await Axios.get(`https://api.ipfind.com/?ip=${ip}`)
        .then((response) => response.data.country)
        .catch((error) => console.error(error));
      setCountry(pais);

      changeCountry(pais);
    }
    fetchData();
  }, []);
  const changeCountry = async (name) => {
    const flag = Datos.filter((dato) => dato.name === name);
    setCountryFlag(flag[0].flag);
    const casos = await Axios.get(`https://chart-covid.herokuapp.com/countries/${name}/`)
      .then((response) => response.data)
      .catch((error) => console.error(error));
    setCasos(casos);
  };
  return (
    <Context.Consumer>
      {({ countryName, changeName }) => {
        if (countryName) changeCountry(countryName);
        return (
          <>
            <main className="container">
              <section className="home__map">
                <Navbar />
                <MapContainer Datos={Datos} topCountries={topCountries} />
                <Top10 topCountries={topCountries} />
              </section>
              <section className="home__data">
                <h1 className="home__data--country">{countryName || country}</h1>
                <img className="home__data--flag" src={countryFlag || ""} alt="Flag country" />
                <div className="card card__infected">
                  <p>Total de casos infectados</p>
                  <h1>{casos.total_cases}</h1>
                </div>
                <div className="card card__activeCases">
                  <p>Casos activos</p>
                  <h1>{casos.active_cases}</h1>
                </div>
                <div className="card card__deaths">
                  <p>Total de muertes</p>
                  <h1>{casos.total_deaths}</h1>
                </div>
                <div className="card card__recovered">
                  <p>Total de recuperados</p>
                  <h1>{casos.total_Recovered}</h1>
                </div>
                <div className="card card__data">
                  <Chart historical={casos.historical} />
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
      }}
    </Context.Consumer>
  );
};
export default Home;
