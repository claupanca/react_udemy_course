import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

import styles from "./AppLayout.module.css";
// import { useCities } from "../context/CitiesContext";
import Spinner from "../components/Spinner";
import User from "../components/User";
import ProtectedRoute from "./ProtectedRoute";

import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../redux-slices/citiesSlice";
import { useEffect } from "react";

export default function AppLayout() {
  // CONTEXT API
  // const { status } = useCities();
  // console.log("status", status);

  // RTK
  const { status } = useSelector((store) => store.cities);
  console.log("status", status);

  return (
    <ProtectedRoute>
      <div>
        {status === "loading" && <Spinner />}
        {status === "ready" && (
          <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
