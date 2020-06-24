import React from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import Datos from '../../coordenadas.json';

import './styles.scss';



const MapContainer = () => {
  return (
    <Map
      center={[0,0]}
      zoom={2}
      keyboard={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {
        Datos.map((dato, index) => {
          let positionCountrie = [dato.location.lat, dato.location.lng]
          return(
            <Marker key={index} position={positionCountrie}>
              <Popup>Pais: {dato.name}<br/>Confirmados: 160,000<br />Muertes: 19,080</Popup>
            </Marker>

          )
        })
      }
    </Map>
  );
}

export default MapContainer;