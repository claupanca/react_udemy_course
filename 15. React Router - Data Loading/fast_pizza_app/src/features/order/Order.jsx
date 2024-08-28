// Test ID: IIDSAT

import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import { useFetcher, useLoaderData } from "react-router-dom";

import OrderItem from "./OrderItem";
import { useEffect } from "react";

// const FAKE order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

export default function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  // use this to get the data from the loader
  const loaderData = useLoaderData();
  console.log("loaderData", loaderData);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = loaderData;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();
  console.log("fetcher", fetcher);

  useEffect(() => {
    if (!fetcher.data && fetcher.state == "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  console.log("fetcher", fetcher);

  return (
    <div className="mt-2 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order # {id} Status </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-green-300">
              Priority
            </span>
          )}
          <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase text-red-300">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-green-200 px-2 py-4">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-green-700">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-green-300">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-4 bg-green-200 px-2 py-4">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-md font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function orderLoader(urlData) {
  // the data passed to the Loader contains the params
  // and we can use them without the useParams hook
  const request = urlData;
  console.log("request", request.params.orderId);
  const id = request.params.orderId;

  const data = await getOrder(id);
  console.log("data from api", data);

  // console.log("id", id);
  // const orderId = useParams();
  return data;
}
