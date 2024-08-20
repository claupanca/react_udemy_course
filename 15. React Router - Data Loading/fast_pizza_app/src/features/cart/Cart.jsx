import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = fakeCart;
  const cart = useSelector((store) => store.cart.cart);

  const userName = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  console.log("cart length", cart.length < 1);

  return (
    <div>
      {/* <Link to="/menu" className="text-sm text-blue-400 hover:text-blue-700">
        &larr; Back to menu
      </Link> */}
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-8 divide-y divide-green-600 border-b border-r-green-600">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-5 space-x-5">
        <Button
          to={cart.length > 0 ? "/order/new" : ""}
          type="primary"
          disabled={cart.length < 1}
        >
          Order Pizza
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary" onClick={handleClear}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
