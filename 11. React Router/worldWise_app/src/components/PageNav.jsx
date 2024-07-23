import { NavLink } from "react-router-dom";

import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img
            className={styles.logo_img}
            src="../../assets/logo.png"
            alt="logo"
          />
        </NavLink>
      </div>
      <ul className={styles.ul}>
        <li>
          <NavLink className={styles.nav_link} to="/product">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_link} to="/pricing">
            PRICING
          </NavLink>
        </li>
        <li>
          <NavLink className={"cta"} to="/login">
            LOG IN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
