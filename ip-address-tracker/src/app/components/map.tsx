"use client";
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWthcmUiLCJhIjoiY2x5dHcwMHdtMHZteDJtcjQwaTY0Mmc4bSJ9.Q9JpgAI-8juqVMqXaykhkA';

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-75.5, 40],
        zoom: 9,
      });

      return () => map.remove();
    }
  }, []);

  return (
<div id='map' ref={mapContainerRef} className=""></div>
  );
};

export default Map;