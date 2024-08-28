import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

import { useDispatch } from "react-redux";
import { useState } from "react";

import { addToCart } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  function handleAdd() {
    // console.log("addToCart", pizza);
    // console.log("quantiy", quantity);
    dispatch(addToCart(pizza, quantity));
    setQuantity(1);
  }

  function increaseQty() {
    setQuantity((prevState) => prevState + 1);
  }

  function decreaseQty() {
    if (quantity < 2) return;
    setQuantity((prevState) => prevState - 1);
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-60 grayscale" : ""} `}
      />
      <div className="flex grow flex-col">
        <p className="text-lg">{name}</p>
        <p className="font-base font-normal capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text- text-sm font-medium uppercase">Sold out</p>
          )}
          {!soldOut && (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Button type="small" onClick={decreaseQty} disabled={soldOut}>
                  -
                </Button>
                <p>{quantity}</p>
                <Button type="small" onClick={increaseQty} disabled={soldOut}>
                  +
                </Button>
              </div>
              <Button type="small" onClick={handleAdd} disabled={soldOut}>
                Add to cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
