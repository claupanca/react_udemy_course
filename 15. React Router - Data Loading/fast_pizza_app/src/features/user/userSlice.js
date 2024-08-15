import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: "",
};

const userReducer = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    updateUser(currState, action) {
      console.log("currState", currState);
      console.log("action", action);
      currState.user = action.payload;
    },
  },
});

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}

export default userReducer.reducer;

export const { updateUser } = userReducer.actions;
