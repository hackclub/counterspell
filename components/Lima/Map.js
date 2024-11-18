
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import events from "./events.json";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function Map() {
  const [center, setCenter] = useState([35.683, -25.099]);
  const [mapIcon, setMapIcon] = useState(null);

  const bounds = [
    [-85, -Infinity],
    [85, Infinity],
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      const icon = new L.Icon({
        iconUrl: "/logo192.png",
        iconSize: new L.Point(20, 20),
        popupAnchor: [0, 0],
      });
      setMapIcon(icon);

      setCenter(window.innerWidth > 767.98 ? [35.683, -25.099] : [55, -100]);
    }
  }, []);

  if (!mapIcon) {
    return null;
  }

  return (
    <>
      <MapContainer
        center={center}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        zoom={2.5}
        minZoom={1}
        style={{ width: "100%", height: "500px" }}
        worldCopyJump={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {events.map((event, idx) => (
          <Marker
            position={[event.latitude, event.longitude]}
            key={idx}
            icon={mapIcon}
          >
            <Popup>
              <a
                href={`https://hackclub.slack.com/archives/${event.slack_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.name}
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}