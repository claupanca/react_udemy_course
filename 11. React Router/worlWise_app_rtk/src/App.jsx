import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import { CitiesProvider, useCities } from "./context/CitiesContext";
// import { CitiesProvider } from "./context/CitiesContext";
// import { LoginProvider } from "./context/LoginConext";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import City from "./components/City";
import Spinner from "./components/Spinner";

import { getCities } from "./redux-slices/citiesSlice";
import { useDispatch } from "react-redux";

//  We are Lazy Loading These pages
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

//  Lazy loading the pages
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  // testing purposes

  // RTK
  const dispatch = useDispatch();
  dispatch(getCities());

  return (
    <div className="app">
      <h1>
        Same app as previous but with REDUX instead of Context API + useReducer
      </h1>
      {/* <LoginProvider> */}
      {/* <CitiesProvider> */}
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />

            <Route path="app" element={<AppLayout />}>
              {/* Nested routes --> Using <OUTLET /> */}
              <Route index element={<Navigate replace to={"cities"} />} />
              <Route path="cities" element={<CityList />} />
              {/* ROUTE for PARAM  */}
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* </CitiesProvider> */}
      {/* </LoginProvider> */}
    </div>
  );
}

export default App;
