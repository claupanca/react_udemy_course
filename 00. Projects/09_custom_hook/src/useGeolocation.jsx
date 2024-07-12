import { useState, useEffect, useRef } from "react";

export default function useGeolocation(apiKey) {
  const [coords, setCoords] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  let counter = useRef(0);

  function handleClick() {
    setLoading(true);

    counter.current = counter.current + 1;

    const success = function (data) {
      const dataa = data.coords;
      console.log("dataaa", dataa);
      setCoords(data.coords);
    };
    navigator.geolocation.getCurrentPosition(success);
  }

  useEffect(() => {
    console.log("coords changed");
    async function getCity() {
      try {
        if (coords.latitude) {
          const response = await fetch(
            `https://api.geocodify.com/v2/reverse?api_key=${apiKey}&lat=${coords.latitude}&lng=${coords.longitude}`
          );
          const data = await response.json();

          setCity(() => data.response.features[0].properties.locality);
          setCountry(() => data.response.features[0].properties.country);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error: ", err.message);
      }
    }

    getCity();
  }, [coords]);

  return [city, country, counter, loading, handleClick];
}
