import { useEffect, useState } from "react";
// import { useCities } from "../context/CitiesContext";
import Button from "./Button";
import styles from "./City.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { getCity } from "../redux-slices/citiesSlice";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // WE are not using this -- we will fetch the data from the fake server
  // const { cities } = useCities();
  // const city = cities.filter((item) => item.id === id)[0];

  // // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  // const { cityName, emoji, date, notes } = currentCity;

  //
  //

  //  We initially used the LOCAL STATE to fetch data from server

  // const { id } = useParams();
  // console.log("id", id);

  // const [currentCity, setCurrentCity] = useState("");

  // // fetch data from the Server
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await fetch(`http://localhost:3000/cities/${id}`);
  //       const data = await res.json();
  //       if (!res.ok) throw new Error("Error fetching data");
  //       // console.log("data", data);
  //       setCurrentCity(data);
  //     } catch (err) {
  //       console.log("error", err.message);
  //     }
  //   }

  //   getData();
  // }, []);

  // const { cityName, emoji, date, notes } = currentCity;

  // BUT we  are using this state in multiple components
  // so we store it into CONTEXT

  const { id } = useParams();
  console.log("id", id);

  // CONTEXT API
  // const { getCity, currentCity } = useCities();

  // useEffect(() => {
  //   getCity(id);
  // }, []);

  // use useNavigate to navigate programatically
  const navigate = useNavigate();

  //RTK
  const { currentCity } = useSelector((store) => store.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity(id));
  }, []);

  const { cityName, emoji, date, notes } = currentCity;

  // return <h1>{id}</h1>;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button
          type={"back"}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default City;
