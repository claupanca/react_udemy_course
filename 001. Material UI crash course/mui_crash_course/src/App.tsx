import Button, { ButtonOwnProps } from "@mui/material/Button";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/appLayout/appLayout";
import MainPage from "./pages/main/MainPage";

import Authentication from "./pages/authentication/Authentication";
import Database from "./pages/database/Database";
import Hosting from "./pages/hosting/Hosting";
import { Functions } from "@mui/icons-material";
import MachineLearning from "./pages/machine-learning/MachineLearning";
import Storage from "./pages/storage/Storage";

function App() {
  const [buttonColor, setButtonColor] =
    useState<ButtonOwnProps["color"]>("success");

  return (
    <div className="container">
      {/* <Button
        variant="contained"
        size="large"
        color={buttonColor}
        onClick={() =>
          buttonColor == "success"
          ? setButtonColor("warning")
          : setButtonColor("success")
          }
          // disabled={true}
          >
          Hello world. This is the first MUI component
          </Button> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/database" element={<Database />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
