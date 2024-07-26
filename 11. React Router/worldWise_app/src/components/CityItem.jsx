import { Link } from "react-router-dom";

import styles from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";

export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  const { currentCity } = useCities();
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
          <button className={styles.deleteBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </Link>
    </li>
  );
}
