import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is loaded

const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default coordinates
      zoom={13}
      style={{ height: "400px", width: "100%" }} // Set height and width
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Current location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
