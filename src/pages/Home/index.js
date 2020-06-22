import React, { Component } from 'react';

import Navbar from "../../components/Navbar/index";
import Coordinates from '../../coordenadas.json'
// import Map from '../../components/Map/index';

import "./styles.scss";

class Home extends Component {
  state = {
    name: ""
  }

  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  componentDidMount() {
    this.renderMap()
  }


  renderMap() {
    const $map = this.map.current

    const map = new window.google.maps.Map($map, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 3,
    })

    Coordinates.forEach(item => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: item.location.lat,
          lng: item.location.lng,
        },
        map
      })
      marker.addListener('click', () => {
        this.setState({ name: item.name })
      })
    })
  }


  render() {
    return (
      <>
        <main className="container">

          {/* mapa */}
          <section className="home__map">
            <Navbar />
            <div className="map" ref={this.map} >
            </div>
          </section>
          {/* mapa */}

          {/* data */}
          <section className="home__data">
            <p>Búscador</p>
            <h1>{this.state.name}</h1>
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