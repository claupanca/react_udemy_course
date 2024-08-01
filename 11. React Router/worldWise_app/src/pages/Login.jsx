import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useLogin } from "../context/LoginConext";
import { Navigate, useNavigate } from "react-router-dom";
import Message from "../components/Message";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  // we will use the state from the LoginContext
  const { login, isAuth } = useLogin();

  //use navigator to navigate programatically after sucess login
  const navigator = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    login(email, password);

    // console.log("Login");
    // console.log("dbEmail", dbEmail);
    // console.log("dbPassword", dbPass);
    // console.log("email", email);
    // console.log("password", password);

    // if (email !== dbEmail) {
    //   alert("Wrong Email. Try Again");
    //   // return <Message message={message} />;
    // } else if (password !== dbPass) {
    //   alert("Wrong Password. Try Again");
    //   // return <Message message={message} />;
    // } else {
    //   setStatus({ type: "success" });
    //   navigator("/app");
    // }
  }

  // after the isAuth is changed by the login, we useEffect to react to the change
  useEffect(() => {
    // we use replace:true, to delete the login page from the HISTORY STACK
    // when user goes BACK, it will take it to the HOMEPAGE
    if (isAuth) navigator("/app", { replace: true });
  }, [isAuth]);

  return (
    <div>
      <PageNav />
      <main className={styles.login}>
        <form className={styles.form} onSubmit={(e) => handleLogin(e)}>
          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <button>Login</button>
          </div>
        </form>
      </main>
    </div>
  );
}
