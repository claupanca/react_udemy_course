import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteFromCart, increaseQty } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteFromCart(pizzaId));
  }

  function handleIncrease() {
    dispatch(increaseQty(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseQty(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-2 sm:justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Button type="small" onClick={handleDecrease}>
              -
            </Button>
            <Button type="small" onClick={handleIncrease}>
              +
            </Button>
          </div>
          <Button type="small" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
