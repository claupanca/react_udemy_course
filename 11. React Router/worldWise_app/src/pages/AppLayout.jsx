import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

import styles from "./AppLayout.module.css";
import { useCities } from "../context/CitiesContext";
import Spinner from "../components/Spinner";

export default function AppLayout() {
  const { status } = useCities();

  console.log("status", status);

  return (
    <div>
      {status === "loading" && <Spinner />}
      {status === "ready" && (
        <div className={styles.app}>
          <Sidebar />
          <Map />
        </div>
      )}
    </div>
  );
}
