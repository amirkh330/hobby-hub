import { LatLngExpression } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const Map = ({
  height = "200px",
  lat = 35.72445859782193,
  lng = 51.47236884295126,
  setNewPin,
}: {
  height?: string;
  lat?: number;
  lng?: number;
  setNewPin?: ({ lat, lng }: { lat: number; lng?: number }) => void;
}) => {
  const [position, setPosition] = useState({ lat, lng });
  const LocationMarker = () => {
    useMapEvents({
      click: (e: any) => {
        setPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
        setNewPin?.({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });

    return <Marker position={position} />;
  };
  return (
    <MapContainer
      center={[lat, lng] as LatLngExpression}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height, width: "100%", borderRadius: "8px", zIndex: 5 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {/* <Marker position={[lat, lng] as LatLngExpression}>
        <Popup>مکان شما اینجاست!</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
