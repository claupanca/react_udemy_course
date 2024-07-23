import { NavLink } from "react-router-dom";

import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink className={styles.nav_link} to="/">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_link} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_link} to="/product">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
