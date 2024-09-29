import { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import events from '../events.json'

const mapIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/favicon.ico`,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
  popupAnchor: [0, 0]
})

const StyledMapContainer = MapContainer;

export default function Map() {
  const [center, setCenter] = useState(
    window.innerWidth > 767.98 ? [35.683, -25.099] : [55, -100]
  )

  const bounds = [
    [-85, -Infinity],
    [85, Infinity]
  ];

  return (
    <>
      
      <StyledMapContainer
        center={center}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        zoom={2.5}
        minZoom={1}
        style={{ width: '100%', height: '500px' }}
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
            <a href={`https://hackclub.slack.com/archives/${event.slack_id}`} target="_blank" rel="noopener noreferrer">
              {event.name}
            </a>
          </Popup>
          </Marker>
        ))}
      </StyledMapContainer>
    </>
  )
}