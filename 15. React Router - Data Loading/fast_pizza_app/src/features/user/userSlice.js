import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAddress } from "../../services/apiGeocoding";

const initialUserState = {
  user: "",
  location: [],
  status: "idle",
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
  extraReducers: (builder) => {
    builder.addCase(userLocation.pending, (state, action) => {
      console.log("pending");
      state.status = "loading";
    });
    builder.addCase(userLocation.fulfilled, (state, action) => {
      console.log("action", action);
      state.location = action.payload;
      state.status = "ready";
    });
    builder.addCase(userLocation.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

//  to creae a Thunk, we use the createAsyncThunk function provided by RTK
export const userLocation = createAsyncThunk(
  "user/userLocation",
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
  },
);

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export default userReducer.reducer;

export const { updateUser } = userReducer.actions;
