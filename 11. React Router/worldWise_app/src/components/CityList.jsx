import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CityList.module.css";

export default function CityList({ cities }) {
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
