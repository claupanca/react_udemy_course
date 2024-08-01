import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext();

const loginInitialState = {
  isAuth: false,
  dbEmail: "test@test.com",
  dbPass: "test",
};

function reducer(currState, action) {
  console.log("currState", currState);
  console.log("payload", action);
  switch (action.type) {
    case "login":
      return { ...currState, isAuth: true };
    case "logout":
      return { ...currState, isAuth: false };
    default:
      throw new Error("ERROR");
  }
}

function LoginProvider({ children }) {
  const [loginState, dispatch] = useReducer(reducer, loginInitialState);

  const { dbEmail, dbPass, isAuth } = loginState;

  function login(email, password) {
    console.log("email", email);
    console.log("pass", password);

    if (email !== dbEmail || password !== dbPass) {
      alert("Wrong Credentials. Try Again");
    } else {
      dispatch({ type: "login" });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <LoginContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined)
    throw new Error("Context used outside of the LoginProvider");
  return context;
}

export { LoginProvider, useLogin };
