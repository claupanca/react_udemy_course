import { useState, useEffect, useRef } from "react";

import Button from "./Button";
import Result from "./Result";
import ResultCounter from "./ResultCounter";

import API from "../config";
import useGeolocation from "./useGeolocation";

const KEY = API();

function App() {
  const [city, country, counter, loading, handleClick] = useGeolocation(KEY);

  return (
    <div className="container">
      <Button onClick={handleClick} />
      <ResultCounter counter={counter} />
      <Result loading={loading} city={city} country={country} />
    </div>
  );
}

export default App;
