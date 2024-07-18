"use client"
import { useEffect, useRef } from "react";
import L from 'leaflet';

 const Mapper =()=>{
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
      // Check if the map has already been initialized
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([51.505, -0.09], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);
  
        L.marker([51.505, -0.09]).addTo(mapRef.current)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
      }
  
      // Clean up the map instance on component unmount
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
    }, []);
    return(
        <div id="map" className="h-[60vh] w-[100%]"></div>
    )
}

export default Mapper;