import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import './styles.scss';

const position = [19.432608, -99.133209]

const MapContainer = () => {

  return (
    <Map
      center={position}
      zoom={5}
      dragging={false}
      keyboard={false}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>Confirmados: 160,000<br />Muertes: 19,080</Popup>
      </Marker>
    </Map>
  );
}

export default MapContainer;