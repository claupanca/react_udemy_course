import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Message from "./Message";
import { useSelector } from "react-redux";
import store from "../store";
// import { useCities } from "../context/CitiesContext";

export default function CountryList() {
  // CONTEXT API
  // const { cities } = useCities();
  // const countries = Array.from(new Set(cities.map((item) => item.country)));

  // RTK
  const { cities } = useSelector((store) => store.cities);
  const countries = Array.from(new Set(cities.map((item) => item.country)));

  return (
    <ul className={styles.countryList}>
      {countries.length > 0 ? (
        countries.map((item) => <CountryItem key={item} country={item} />)
      ) : (
        <Message message={"No countries Visited yet"} />
      )}
    </ul>
  );
}
