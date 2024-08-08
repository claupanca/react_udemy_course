import { useSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

// leaflet imports
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Popup,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import store from "../store";

// import { useCities } from "../context/CitiesContext";

export default function Map() {
  const [urlState, setUrlState] = useSearchParams();

  const mapLat = urlState.get("lat");
  const mapLng = urlState.get("lng");

  const [mapPosition, setMapPosition] = useState([
    38.727881642324164, -9.140900099907554,
  ]);

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  // useEffect(() => {
  //   const latitude = Number(urlState.get("lat")).toFixed(4);
  //   console.log("latitude", latitude);
  //   const longitude = Number(urlState.get("lng")).toFixed(4);

  //   if (latitude === "0.0000" && longitude === "0.0000") {
  //     setMapPosition(["52", "13"]);
  //   } else {
  //     setMapPosition([latitude, longitude]);
  //   }
  // }, [urlState]);

  // CONTEXT API
  // const { cities } = useCities();

  // RTK
  const { cities } = useSelector((store) => store.cities);

  // console.log("urlState", urlState);
  // console.log("latitude", urlState.get("lat"));
  // console.log("longitude", urlState.get("lng"));

  // const SimpleMap = () => {
  const mapRef = useRef(null);
  // const latitude = 51.505;
  // const longitude = -0.09;
  // };

  console.log("mapPosition", mapPosition);

  return (
    <section className={styles.mapContainer}>
      <h1>lat = {mapPosition} </h1>
      {/* <h1>longitude = {longitude}</h1> */}

      <MapContainer
        center={mapPosition}
        zoom={6}
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

        {/* use this to change the mapPosition according to the lat lng */}
        <ChangeCenter position={mapPosition} />

        {/* detect the click on the map */}
        <DetectClick />
      </MapContainer>
    </section>
  );
}

// to change the map position, we need to create a component on our own
// since the center property of the map is not REACTIVE
function ChangeCenter({ position }) {
  // we use the useMap() hook to get the current instance of the MAP ELEMENT
  const myMap = useMap();
  console.log("myMap", myMap);
  myMap.setView(position);

  // we return null
  return null;
}

//  we create a new Component to open the FORM when we click on the map
function DetectClick() {
  //  we use the navigate hook to navigate programatically to the form
  const navigate = useNavigate();

  // we use the useMapEvents hook from Leaflet
  useMapEvents({
    // we will store the state of the clicked position in the URL
    // like this we can access it into the FORM
    click: (e) => navigate(`form/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    // click: (e) => console.log("eee", e),
  });
}
