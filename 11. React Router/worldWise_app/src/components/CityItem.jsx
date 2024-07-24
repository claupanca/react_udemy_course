import { Link } from "react-router-dom";

import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  return (
    <li>
      <Link to={`${city.id}`} className={styles.cityItem}>
        <div className={styles.title}>
          <div className={styles.emoji}>{city.emoji}</div>
          <div className={styles.name}>{city.cityName}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.date}>
            {new Date(city.date).toLocaleDateString()}
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
