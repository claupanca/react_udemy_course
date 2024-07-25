import { useSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [urlState, setUrlState] = useSearchParams();

  const latitude = urlState.get("lat");
  const longitude = urlState.get("lng");

  const navigate = useNavigate();

  // console.log("urlState", urlState);
  // console.log("latitude", urlState.get("lat"));
  // console.log("longitude", urlState.get("lng"));

  return (
    <section className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>lat = {latitude} </h1>
      <h1>longitude = {longitude}</h1>
    </section>
  );
}
