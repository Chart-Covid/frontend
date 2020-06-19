import React, { Component } from 'react';

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
    // const mapa = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyCfw80YXSof3XpXY-_gXRYRK9UuKiRqzyo')
    // console.log(mapa)
    const $map = this.map.current

    new window.google.maps.Map($map, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 3,
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
