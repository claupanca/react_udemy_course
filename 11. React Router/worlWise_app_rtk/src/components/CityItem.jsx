import { Link } from "react-router-dom";

import styles from "./CityItem.module.css";
// import { useCities } from "../context/CitiesContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity } from "../redux-slices/citiesSlice";

export default function CityItem({ city }) {
  // CONTEXT API

  // const { currentCity, deleteCity } = useCities();
  // console.log("city", city.id);
  // console.log("currentCIty", currentCity.id);

  const { cityName, emoji, date, id, position } = city;

  // RTK
  const { currentCity } = useSelector((store) => store.cities);

  const dispatch = useDispatch();

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
      >
        <div className={styles.title}>
          <div className={styles.emoji}>{emoji}</div>
          <div className={styles.name}>{cityName}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.date}>
            {new Date(date).toLocaleDateString()}
          </div>
          <button
            className={styles.deleteBtn}
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteCity(id));
            }}
          >
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}
