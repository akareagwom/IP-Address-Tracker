"use client"
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import dynamic from 'next/dynamic';
import L from 'leaflet';
import { posix } from "path";

// Fix default icon issue
// delete L.Icon.Default.prototype._getIconUrl;


// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
//   iconUrl: 'leaflet/dist/images/marker-icon.png',
//   shadowUrl: 'leaflet/dist/images/marker-shadow.png',
// });

 const Mapper =()=>{

    return(
      <div className="">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
}

export default Mapper;