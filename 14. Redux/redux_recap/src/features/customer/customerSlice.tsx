const initialStateCustomer = {
  name: "",
  id: 0,
  createdAt: "",
};

// Customer Reducer
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/newCustomer":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
const newCustomer = (name, id) => {
  return {
    type: "customer/newCustomer",
    payload: { name, id, createdAt: new Date().toISOString() },
  };
};

const updateName = (name) => {
  return {
    type: "customer/updateName",
    payload: name,
  };
};

export { newCustomer, updateName };
