import { Link } from "react-router-dom";

import styles from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";

export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  const { currentCity, deleteCity } = useCities();
  console.log("city", city.id);
  console.log("currentCIty", currentCity.id);

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
              deleteCity(id);
            }}
          >
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}
