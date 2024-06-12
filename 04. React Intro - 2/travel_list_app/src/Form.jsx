import { useState } from "react";

export default function Form({ onHandleSubmit }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItem(e) {
    e.preventDefault();

    if (description !== "") {
      onHandleSubmit([quantity, description]);
      setDescription((prevState) => "");
      setQuantity((prevState) => 1);
    } else {
      alert("Please enter a name for the item");
    }
  }

  return (
    <form className="add-form" onSubmit={handleAddItem}>
      <h3>Add a new item:</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option> */}
      </select>
      <input
        placeholder="Item name"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button type="submit">Add Item</button>
    </form>
  );
}
