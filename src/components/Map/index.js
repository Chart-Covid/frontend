import React, { Component } from 'react';

import Coordinates from '../../coordenadas.json'

import './styles.scss'

class Map extends Component {
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

    console.log(Coordinates)

    Coordinates.forEach(item => {
      new window.google.maps.Marker({
        position: {
          lat: item.location.lat,
          lng: item.location.lng,
        },
        map
      })
    })
  }

  render() {
    return (
      <div className="map" ref={this.map}>

      </div>
    );
  }
}

export default Map
