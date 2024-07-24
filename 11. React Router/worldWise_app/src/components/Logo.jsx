import { NavLink } from "react-router-dom";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink to="/">
        <img src="../../assets/logo.png" alt="logo" />
      </NavLink>
    </div>
  );
}
