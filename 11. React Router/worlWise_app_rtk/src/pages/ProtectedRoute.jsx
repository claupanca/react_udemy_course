import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginConext";
import { useEffect } from "react";

// we use this to PROTECT THE APP
// from UNAUTHORIZED access
export default function ProtectedRoute({ children }) {
  const { isAuth } = useLogin();
  const navigator = useNavigate();

  useEffect(() => {
    if (!isAuth) navigator("/");
  }, [isAuth, navigator]);

  return children;
}
