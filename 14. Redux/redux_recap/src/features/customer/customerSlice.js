// interface Customer {
//   name: string;
//   id: number;
//   createdAt: string;
// }

const initialStateCustomer = {
  name: "",
  id: 0,
  createdAt: "",
};

// enum ActionType {
//   NEW_CUSTOMER = "customer/newCustomer",
//   UPDATE_CUSTOMER = "customer/updateCustomer",
// }

// interface NewCustomer {
//   type: ActionType.NEW_CUSTOMER;
//   payload: Customer;
// }

// interface UpdateCustomer {
//   type: ActionType.UPDATE_CUSTOMER;
//   payload: string;
// }

// type Action = NewCustomer | UpdateCustomer;

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
    case "customer/updateCustomer":
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
    type: "customer/updateCustomer",
    payload: name,
  };
};

export { newCustomer, updateName };
