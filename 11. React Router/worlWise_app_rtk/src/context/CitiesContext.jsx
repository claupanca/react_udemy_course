// // import { create } from "json-server";
// import { createContext, useContext, useReducer } from "react";
// import { useEffect } from "react";

// // create the new context
// const CitiesContext = createContext();

// function reducer(currState, action) {
//   switch (action.type) {
//     case "loading":
//       return { ...currState, status: "loading" };
//     case "receivedData":
//       return {
//         ...currState,
//         status: "ready",
//         cities: action.payload,
//       };
//     case "currentCity":
//       return {
//         ...currState,
//         currentCity: action.payload,
//       };
//     case "createCity":
//       console.log("add");
//       return {
//         ...currState,
//         cities: [...currState.cities, action.payload],
//       };
//     case "deleteCity":
//       return {
//         ...currState,
//         cities: [
//           ...currState.cities.filter((item) => item.id != action.payload),
//         ],
//       };
//   }
// }

// const initialState = {
//   // loading, ready
//   status: "loading",
//   cities: [],
//   countries: [],
//   currentCity: {},
// };

// // create the Provider component
// function CitiesProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const { status, cities, currentCity } = state;

//   useEffect(() => {
//     async function getData() {
//       dispatch({ type: "loading" });
//       try {
//         const response = await fetch("http://localhost:8000/cities");

//         if (!response.ok) {
//           throw new Error("Something went wrong");
//         }

//         const data = await response.json();
//         dispatch({ type: "receivedData", payload: data });
//       } catch (err) {
//         console.log("error: ", err.message);
//       }
//     }

//     getData();
//   }, []);

//   async function getCity(id) {
//     try {
//       const response = await fetch(`http://localhost:8000/cities/${id}`);

//       if (!response.ok) {
//         throw new Error("Something went wrong");
//       }

//       const data = await response.json();
//       dispatch({ type: "currentCity", payload: data });
//     } catch (err) {
//       console.log("error: ", err.message);
//     }
//   }

//   async function createCity(newCity) {
//     try {
//       const res = await fetch(`http://localhost:8000/cities`, {
//         method: "POST",
//         body: JSON.stringify(newCity),
//         headers: {
//           "Content-Type": "application/json",
//           // "Content-Security-Policy": "default-src self",
//         },
//       });
//       const data = await res.json();
//       console.log("data from context", data);
//       dispatch({ type: "createCity", payload: data });
//     } catch (err) {
//       console.log("error", err.message);
//     }
//   }

//   async function deleteCity(id) {
//     try {
//       const res = await fetch(`http://localhost:8000/cities/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       dispatch({ type: "deleteCity", payload: id });
//     } catch (err) {
//       console.log("error", err.message);
//     }
//   }

//   return (
//     <CitiesContext.Provider
//       value={{
//         status: status,
//         cities: cities,
//         currentCity: currentCity,
//         getCity: getCity,
//         createCity: createCity,
//         deleteCity: deleteCity,
//       }}
//     >
//       {children}
//     </CitiesContext.Provider>
//   );
// }

// function useCities() {
//   const context = useContext(CitiesContext);
//   if (context === undefined)
//     throw new Error("CitiesContext was used outsite of the CitiesProvider");
//   return context;
// }

// export { CitiesProvider, useCities };
