import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

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

function Cart() {
  const cart = fakeCart;

  const userName = useSelector((store) => store.user.user);

  return (
    <div>
      {/* <Link to="/menu" className="text-sm text-blue-400 hover:text-blue-700">
        &larr; Back to menu
      </Link> */}
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-8 divide-y divide-green-600 border-b border-r-green-600">
        {fakeCart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-5 space-x-5">
        <Button to="/order/new" type="primary">
          Order Pizza
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
