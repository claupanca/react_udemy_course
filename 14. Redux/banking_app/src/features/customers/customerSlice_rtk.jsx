import { createSlice } from "@reduxjs/toolkit";

// customer initial state
const initialStateCustomer = {
  name: "",
  nationalID: "",
  createdAt: "",
};

// RTK
const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    // When we pass multiple args as payload we must PRepare the data
    addNewCustomer: {
      prepare(name, nationalID) {
        return {
          payload: {
            name,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(currState, action) {
        currState.name = action.payload.name;
        currState.nationalID = action.payload.nationalID;
        currState.createdAt = action.payload.createdAt;
      },
    },
    updateCustomer(currState, action) {
      currState.name = action.payload;
    },
  },
});

console.log("customer slice", customerSlice);

export default customerSlice.reducer;

export const { addNewCustomer, updateCustomer } = customerSlice.actions;

/*
//  Classic Redux
// customer reducer
export default function customerReducer(
  currState = initialStateCustomer,
  action
) {
  switch (action.type) {
    case "customer/add":
      return {
        ...currState,
        name: action.payload.name,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...currState, name: action.payload };

    default:
      return currState;
  }
}

//  customer action creators
export function addNewCustomer(name, nationalID) {
  return {
    type: "customer/add",
    payload: { name, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(name) {
  return { type: "customer/updateName", payload: name };
}

// export { addNewCustomer, updateName };
*/
