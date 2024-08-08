import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  cities: [],
  countries: [],
  currentCity: {},
};

const cities = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {
    loading(currState, action) {
      currState.status = "loading";
    },
    receivedData(currState, action) {
      currState.status = "ready";
      currState.cities = action.payload;
    },
    currentCity(currState, action) {
      currState.status = "ready";
      currState.currentCity = action.payload;
    },
    createCityAction(currState, action) {
      currState.status = "ready";
      currState.cities = [...currState.cities, action.payload];
    },
    deleteCityAction(currState, action) {
      currState.cities = currState.cities.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export default cities.reducer;

export const { loading, receivedData, currentCity, createNewCity } =
  cities.actions;

// THUNK Functions to fetch data
export function getCities() {
  return async function (dispatch, getState) {
    dispatch({ type: "cities/loading" });
    try {
      const res = await fetch("http://localhost:8000/cities");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      dispatch({ type: "cities/receivedData", payload: data });
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
}

export function getCity(id) {
  return async function (dispatch, getState) {
    try {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      dispatch({ type: "cities/currentCity", payload: data });
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
}

export function deleteCity(id) {
  return async function (dispatch, getState) {
    const res = await fetch(`http://localhost:8000/cities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({ type: "cities/deleteCityAction", payload: id });
  };
}

export function createCity(newCity) {
  return async function (dispatch, getState) {
    const res = await fetch(`http://localhost:8000/cities`, {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
        // "Content-Security-Policy": "default-src self",
      },
    });

    const data = await res.json();
    console.log("data from context", data);
    dispatch({ type: "cities/createCityAction", payload: data });
  };
}
