import { useState } from "react";

export default function AddForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || image === "") {
      alert("No empty inputs");
      return;
    }
    onAddFriend({
      id: 4,
      name: name,
      image: image,
      balance: 0,
    });

    setName((prevState) => "");
    setImage((prevState) => "");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👩‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>🖼️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
}
