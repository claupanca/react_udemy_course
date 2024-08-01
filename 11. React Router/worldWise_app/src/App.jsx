import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import { CitiesProvider, useCities } from "./context/CitiesContext";
import { LoginProvider } from "./context/LoginConext";

function App() {
  return (
    <div className="app">
      <LoginProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />

              <Route path="app" element={<AppLayout />}>
                \{/* Nested routes --> Using <OUTLET /> */}
                <Route index element={<Navigate replace to={"cities"} />} />
                <Route path="cities" element={<CityList />} />
                {/* ROUTE for PARAM  */}
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
