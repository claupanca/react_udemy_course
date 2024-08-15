import { Form, redirect, useNavigation, useActionData } from "react-router-dom";

// import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder() {
  const userName = useSelector((store) => store.user.user);
  // const [user, setUser] = useState(userName);

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  // we use this to change the button while the form is sending data
  const navigation = useNavigation();
  console.log("navigation", navigation);

  // we use this to get access to the Errors Object
  const formErrors = useActionData();
  console.log("formErrors", formErrors);

  return (
    <div className="py-2">
      <h2 className="text-xl font-bold">Ready to order? Let's go!</h2>

      {/* we use this Form instead of the <form> */}

      <Form method="POST" className="mt-8">
        <div>
          <label>First Name</label>
          <input
            className="input mt-2"
            type="text"
            name="customer"
            // value={user}
            // onChange={(e) => setUser(e.target.value)}
            // we dont use Value and onChange
            //
            // we use defaultValue, and this will set only the initial Value
            // defaultValue does not require onChange and state
            defaultValue={userName}
            required
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input mt-2" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 px-3 text-xs text-red-500">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="input mt-2" type="text" name="address" required />
          </div>
        </div>

        <div className="m-2 flex items-center gap-5">
          <input
            className="mr-2 h-6 w-6 accent-green-500"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          {/* <button
            // disabled={true}
            className="rounded-full bg-green-600 p-3 font-semibold uppercase tracking-wide text-green-100 transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-500"
            disabled={navigation.state === "submitting" ? true : false}
          >
            Order now
          </button> */}
          <Button
            disabled={navigation.state === "submitting" ? true : false}
            type="primary"
          >
            Order Now
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function orderAction(request) {
  const formData = await request.request.formData();
  const data = Object.fromEntries(formData);
  console.log("formData", formData);
  console.log("data", JSON.stringify(data));

  // createOrder(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  console.log("order", order);

  // FORM VALIDATION and Error Handling
  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = "Phone number is incorrect";

  // if the ERRORS object has some data, we return the errors instead of the
  // newly created Order
  if (Object.keys(errors).length > 0) return errors;

  // if there are no ERRORS, the order is sent to the API
  // newOrder is coming back as a response from the API
  const newOrder = await createOrder(order);
  console.log("newOrder is submitted", newOrder);

  // and we are redirected to the Order Page
  return redirect(`/order/${newOrder.id}`);
}
