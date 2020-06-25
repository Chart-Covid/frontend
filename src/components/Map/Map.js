import React from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import Context from "../../Context";

import "./styles.scss";

const MapContainer = ({ Datos, topCountries={} }) => (
  <Context.Consumer>
    {
      ({changeName}) => {
        return(
          <Map center={[0, 0]} zoom={2} keyboard={false} zoomControl={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {Datos.map((dato, index) => {
              let opacity;
              (Object.keys(topCountries).includes(dato.name)) ? opacity = 1 : opacity = 0.5;

              let positionCountry = [dato.location.lat, dato.location.lng];

              return (
                <Marker key={index} position={positionCountry} opacity={opacity}>
                  <Popup onOpen={() => {changeName(dato.name)}}>
                    {dato.name}
                  </Popup>
                </Marker>
              );
            })}
          </Map>

        )
      }
    }
  </Context.Consumer>
);

export default MapContainer;
