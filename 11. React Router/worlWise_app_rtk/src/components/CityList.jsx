import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CityList.module.css";
import { useSelector } from "react-redux";
// import { useCities } from "../context/CitiesContext";

// import { useDispatch, useSelector } from "react-redux";
// import { getCities } from "../redux-slices/citiesSlice";

export default function CityList() {
  // CONTEXT API
  // const { cities } = useCities();

  // RTK
  // const dispatch = useDispatch();
  // dispatch(getCities());
  const { cities } = useSelector((store) => store.cities);

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
