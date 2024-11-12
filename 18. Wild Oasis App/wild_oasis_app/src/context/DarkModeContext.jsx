import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // we are going to use the useLocalStorage custom hook we have build
  const [theme, setTheme] = useLocalStorageState("light", "theme");

  function handleSwitch() {
    console.log("switch", theme);
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  }

  // here we set the className of the :root element
  useEffect(() => {
    document.querySelector("html").className = `${theme}-mode`;
  }, [theme]);

  return (
    <DarkModeContext.Provider
      value={{
        theme: theme,
        setTheme: handleSwitch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

// we are creating a CUSTOM HOOK to cosume the context
function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("DarkModeContext used outside of the DarkModeProvider");
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
