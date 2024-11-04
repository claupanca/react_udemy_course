import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App_protected_route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
