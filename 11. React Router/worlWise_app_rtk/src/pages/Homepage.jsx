import { Link, Navigate, NavLink } from "react-router-dom";
import Navigation from "../components/PageNav";
import PageNav from "../components/PageNav";

import styles from "./Homepage.module.css";
import { useLogin } from "../context/LoginConext";

export default function Homepage() {
  // we access the login provider to get the status of the login
  const { isAuth } = useLogin();

  return (
    <div>
      <PageNav />
      <div className={styles.homepage}>
        <h1>You travel the world.</h1>
        <h1>WorldWise keeps track of your adventures</h1>
        <h3>
          A world map that tracks your footsteps into every city you can think
          of. never forget your wonderful experiences, and show your friends how
          you have wandered the world
        </h3>
        <NavLink
          className="cta"
          // if not logged in, we dispaly the login form. Else - app
          to={`${isAuth ? "/app" : "/login"}`}
        >
          Start Tracking Now
        </NavLink>
      </div>
    </div>
  );
}
