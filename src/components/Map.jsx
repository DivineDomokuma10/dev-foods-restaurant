import React from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const position = [52.51, 13.38];

  return (
    <main id="map" className="map w-full h-[50vh]">
      <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};

export default Map;
