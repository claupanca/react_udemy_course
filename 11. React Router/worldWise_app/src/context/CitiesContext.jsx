import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";

// create the new context
const CitiesContext = createContext();

function reducer(currState, action) {
  switch (action.type) {
    case "loading":
      return { ...currState, status: "loading" };
    case "receivedData":
      return {
        ...currState,
        status: "ready",
        cities: action.payload,
      };
    case "currentCity":
      return {
        ...currState,
        currentCity: action.payload,
      };
  }
}

const initialState = {
  // loading, ready
  status: "loading",
  cities: [],
  countries: [],
  currentCity: {},
};

// create the Provider component
function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, cities, currentCity } = state;

  useEffect(() => {
    async function getData() {
      dispatch({ type: "loading" });
      try {
        const response = await fetch("http://localhost:3000/cities");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        dispatch({ type: "receivedData", payload: data });
      } catch (err) {
        console.log("error: ", err.message);
      }
    }

    getData();
  }, []);

  async function getCity(id) {
    try {
      const response = await fetch(`http://localhost:3000/cities/${id}`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      dispatch({ type: "currentCity", payload: data });
    } catch (err) {
      console.log("error: ", err.message);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        status: status,
        cities: cities,
        currentCity: currentCity,
        getCity: getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outsite of the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
