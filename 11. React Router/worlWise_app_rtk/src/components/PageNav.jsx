import { NavLink } from "react-router-dom";

import styles from "./PageNav.module.css";
import Logo from "./Logo";
// import { useLogin } from "../context/LoginConext";
import { useSelector } from "react-redux";
import store from "../store";

export default function PageNav() {
  // CONTEXT API
  // const { isAuth } = useLogin();

  // RTK
  const { isAuth } = useSelector((store) => store.login);

  return (
    <nav className={styles.nav}>
      <Logo />

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
          {/* className in the global index.css -- that's why we are not using {styles.}*/}
          <NavLink className="cta" to={isAuth ? "/app" : "/login"}>
            LOG IN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}