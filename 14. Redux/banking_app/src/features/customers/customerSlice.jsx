// customer initial state
const initialStateCustomer = {
  name: "",
  nationalID: "",
  createdAt: "",
};

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
