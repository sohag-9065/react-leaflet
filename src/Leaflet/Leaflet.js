import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Leaflet.css";
import "leaflet/dist/leaflet.css";

const Leaflet = () => {

  const leafletContainer = {
    width: "350px",
    height: "350px",
  };
  return (
    <div>
      <div >
        <MapContainer
          center={[23.757795396158066, 90.36558879590045]}
          zoom={14}
          scrollWheelZoom={true}
          style={leafletContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.757795396158066, 90.36558879590045]}>
            <Popup>F10, Zakir Hossain Road, Mohammadpur, Dhaka 1207</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Leaflet;