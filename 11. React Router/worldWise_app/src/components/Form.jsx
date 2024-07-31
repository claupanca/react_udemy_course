// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import Spinner from "./Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";

import API from "../../config";
import { useCities } from "../context/CitiesContext";
import { v4 as uuidv4 } from "uuid";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const KEY = API();

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false);

  // Add useNavigate to Navigate programatically
  const navigate = useNavigate();

  //  we use useSearchParams to get the query string params from the URL
  const [urlState, setUrlState] = useSearchParams();

  const lat = urlState.get("lat");
  const lng = urlState.get("lng");

  const { createCity } = useCities();

  useEffect(() => {
    async function getData() {
      setIsLoadingGeolocation(true);
      try {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        // console.log("data", data.locality.toLowerCase);
        if (data.locality.toLowerCase().includes("etc")) {
          alert("Please select another location");
          throw new Error("Try Again");
        }
        setIsLoadingGeolocation(false);
        setCityName(data.locality);
        setCountry(data.countryName);
        setEmoji(data.countryCode);
      } catch (err) {
        console.log("error", err.message);
      } finally {
        setIsLoadingGeolocation(false);
      }
    }
    getData();
  }, [lat, lng]);

  if (isLoadingGeolocation) return <Spinner />;

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        createCity({
          cityName: cityName,
          country: country,
          emoji: emoji,
          date: date,
          notes: notes,
          position: { lat: lat, lng: lng },
          // id: uuidv4(),
        });
        navigate(-1);
      }}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        {/* <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        {/* Use the datepicker Component */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type={"primary"}>Add</Button>
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
    </form>
  );
}

export default Form;
