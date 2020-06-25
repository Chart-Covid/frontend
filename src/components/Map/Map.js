import React from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

import "./styles.scss";

const MapContainer = ({ Datos, topCountries={} }) => {
  return (
    <Map center={[0, 0]} zoom={2} keyboard={false} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {Datos.map((dato, index) => {
        let opacity;
        (Object.keys(topCountries).includes(dato.name)) ? opacity = 1 : opacity = 0.5;
        let positionCountrie = [dato.location.lat, dato.location.lng];
        return (
          <Marker key={index} position={positionCountrie} opacity={opacity}>
            <Popup>
              Pais: {dato.name}
              <br />
              Confirmados: 160,000
              <br />
              Muertes: 19,080
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapContainer;
