import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CityList.module.css";
import { useCities } from "../context/CitiesContext";

export default function CityList() {
  const { cities } = useCities();

  return (
    <ul className={styles.cityList}>
      {cities.length > 0 ? (
        cities.map((item) => <CityItem city={item} key={item.id} />)
      ) : (
        <Message message={"No Cities visited yed"} />
      )}
    </ul>
  );
}
