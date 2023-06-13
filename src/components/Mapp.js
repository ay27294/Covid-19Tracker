import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Mapp.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXk1MTEyMDAwIiwiYSI6ImNsaWs2dm9pMTBmZmkzZHFxNXNsYTFmYjYifQ._ts2BbGSSdg7A6vrXYpmdw"; // Replace with your Mapbox access token

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container", // HTML element ID where the map will be rendered
      style: "mapbox://styles/mapbox/streets-v11", // Replace with your desired map style
      center: [0, 0], // Replace with your desired initial coordinates
      zoom: 1, // Replace with your desired initial zoom level
      attributionControl: false
    });

    // Clean up the map instance when the component is unmounted
    return () => map.remove();
  }, []);

  return <div id="map-container" style={{ width: "100%", height: "400px" }} />;
};

export default Map;
