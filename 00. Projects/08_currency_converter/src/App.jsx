import { useState, useEffect } from "react";
import Amount from "./Amount";
import SelectCurr from "./SelectCurr";
import Result from "./Result";

const tempCurrs = ["USD", "AUD", "EUR"];

export default function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [initialListOfCurrencies, setInitialListOfCurrencies] = useState([]);
  const [result, setResult] = useState("");
  // const [exchangeRates, setExchangeRates] = useState([]);

  // we use this to fetch a list of all currencies available on this API
  // this will run only ONCE, at the initial RENDER
  useEffect(() => {
    async function getCurrencies() {
      try {
        const response = await fetch(
          `https://api.fxratesapi.com/latest?currencies&base=${from}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log("DAta", data);
        setInitialListOfCurrencies((prevState) => data.rates);
      } catch (err) {
        console.error("Error message", err.message);
        setResult(err.message);
      }
    }

    getCurrencies();
  }, []);

  // we use this to update the Exchange TO Rates based in how the user
  // changes the From Currency
  useEffect(() => {
    async function getRates() {
      try {
        const response = await fetch(
          `https://api.fxratesapi.com/latest?currencies&base=${from}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong with to rates");
        }
        const data = await response.json();
        setInitialListOfCurrencies((prevState) => data.rates);
      } catch (err) {
        console.log("error message", err.message);
        setResult(err.message);
      }
    }
    console.log("from has changed");
    getRates();
  }, [from]);

  // we use this to do the math for the result
  // based on the changes on Amount, From & To
  useEffect(() => {
    console.log("amount", amount);
    console.log("from", from);
    console.log("to", to, initialListOfCurrencies[to]);
    if (initialListOfCurrencies[to]) {
      setResult((prevState) =>
        (amount * initialListOfCurrencies[to]).toFixed(2)
      );
    }
  }, [amount, from, to]);

  return (
    <div className="container">
      <h1>Currency Exchange App</h1>
      <p>Based on the FxRates API</p>
      <Amount amount={amount} onChange={setAmount} />
      <SelectCurr
        listOfCurrencies={initialListOfCurrencies}
        currency={from}
        onChange={setFrom}
      />
      <SelectCurr
        listOfCurrencies={initialListOfCurrencies}
        currency={to}
        onChange={setTo}
      />
      <Result result={result} />
    </div>
  );
}
