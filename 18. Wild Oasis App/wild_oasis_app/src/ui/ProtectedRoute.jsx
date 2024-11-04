import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  /* margin: 0 auto; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the Authenticated user
  const { user, isLoading, isAuthenticated } = useUser();
  // console.log("user", user);
  // console.log("isLoading", isLoading);

  // 3. If there is no user or the user is no authenticated, redirect to LOGIN PAGE
  // we can call navigate in another function or in a useEffect
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 2. While loading, show a SPINNER
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4. If the user is AUTH, render the app
  if (isAuthenticated) {
    return children;
  }
}
