import { useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import SpinnerFullPage from "./components/SpinnerFullPage";
import City from "./components/City";

const initialState = {
  // loading, ready
  status: "loading",
  cities: [],
  countries: [],
};

function reducer(currState, action) {
  switch (action.type) {
    case "loading":
      return { ...currState, status: "loading" };
    case "receivedData":
      return {
        ...currState,
        status: "ready",
        cities: action.payload,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, cities } = state;

  useEffect(() => {
    async function getData() {
      dispatch({ type: "loading" });
      try {
        const response = await fetch("http://localhost:3000/cities");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        dispatch({ type: "receivedData", payload: data });
      } catch (err) {
        console.log("error: ", err.message);
      }
    }

    getData();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route
            index
            element={status == "loading" ? <Spinner /> : <Homepage />}
          />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} />} />
            <Route path="cities" element={<CityList cities={cities} />} />
            {/* ROUTE for PARAM  */}
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
