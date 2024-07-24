import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Message from "./Message";

export default function CountryList({ cities }) {
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
