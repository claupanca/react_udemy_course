import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  // don't display the component if there is no quantity
  if (totalQuantity == 0) return null;

  return (
    <div className="flex items-center justify-between bg-green-800 px-3 py-3 uppercase text-green-200 sm:px-6">
      <p className="space-x-4 font-semibold text-green-300 sm:space-x-6">
        {totalQuantity > 0 && (
          <span>
            {totalQuantity == 1
              ? totalQuantity + " Pizza"
              : totalQuantity + " Pizzas"}
          </span>
        )}
        {totalPrice > 0 && <span>${totalPrice}</span>}
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
