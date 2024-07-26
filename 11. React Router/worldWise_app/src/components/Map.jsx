import { useSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

// leaflet imports
import { useEffect, useRef, useState } from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useCities } from "../context/CitiesContext";

export default function Map() {
  const [urlState, setUrlState] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([
    38.727881642324164, -9.140900099907554,
  ]);

  useEffect(() => {
    const latitude = Number(urlState.get("lat")).toFixed(4);
    console.log("latitude", latitude);
    const longitude = Number(urlState.get("lng")).toFixed(4);

    setMapPosition([latitude, longitude]);
  }, [urlState]);

  const navigate = useNavigate();
  const { cities } = useCities();

  // console.log("urlState", urlState);
  // console.log("latitude", urlState.get("lat"));
  // console.log("longitude", urlState.get("lng"));

  // const SimpleMap = () => {
  const mapRef = useRef(null);
  // const latitude = 51.505;
  // const longitude = -0.09;
  // };

  // console.log("mapPosition", mapPosition);

  return (
    <section className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>lat = {(mapPosition[0], mapPosition[1])} </h1>
      {/* <h1>longitude = {longitude}</h1> */}

      <MapContainer
        center={mapPosition}
        zoom={13}
        ref={mapRef}
        // style={{ height: "100vh", width: "100vw" }}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
        {/* we add a marker for each of our Cities */}
        {cities.map((item) => (
          <Marker position={[item.position.lat, item.position.lng]}>
            <Popup>{item.cityName}</Popup>
          </Marker>
        ))}
        {/* <Marker position={mapPosition}>
          <Popup>A pretty CSS3popup</Popup>
        {/* </Marker> */}
      </MapContainer>
    </section>
  );
}
