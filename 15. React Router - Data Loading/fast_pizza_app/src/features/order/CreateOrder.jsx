import { Form, redirect, useNavigation, useActionData } from "react-router-dom";

import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
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
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  // we use this to change the button while the form is sending data
  const navigation = useNavigation();
  console.log("navigation", navigation);

  // we use this to get access to the Errors Object
  const formErrors = useActionData();
  console.log("formErrors", formErrors);

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* we use this Form instead of the <form> */}

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={navigation.state === "submitting" ? true : false}>
            Order now
          </button>
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
