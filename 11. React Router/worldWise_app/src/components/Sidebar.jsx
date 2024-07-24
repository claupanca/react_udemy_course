import styles from "./Sidebar.module.css";

import Logo from "../components/Logo";
import CityList from "./CityList";
import AppNav from "./AppNav";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* THis is what we are using to display different elements based on the Nested Route */}
      <Outlet />
      <Footer />
    </section>
  );
}
