import { useNavigate } from "react-router-dom";
// import { useLogin } from "../context/LoginConext";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../store";

// we use this to PROTECT THE APP
// from UNAUTHORIZED access
export default function ProtectedRoute({ children }) {
  // CONTEXT API
  // const { isAuth } = useLogin();

  // RTK
  const { isAuth } = useSelector((store) => store.login);

  const navigator = useNavigate();

  useEffect(() => {
    if (!isAuth) navigator("/");
  }, [isAuth, navigator]);

  return children;
}
