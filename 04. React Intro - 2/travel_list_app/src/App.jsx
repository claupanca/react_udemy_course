import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialItems = [
  {
    id: uuidv4().split("-")[0],
    description: "Passports",
    quantity: 2,
    packed: true,
  },
  {
    id: uuidv4().split("-")[0],
    description: "Socks",
    quantity: 12,
    packed: false,
  },
];

export default function App() {
  const [list, setList] = useState(() => initialItems);

  function handleListClick(id) {
    console.log("id from APP", id);
    const listItemIndex = list.indexOf(list.find((item) => item.id == id));
    console.log("listItemIndex", listItemIndex);

    // Create a new array from actual state
    const updatedList = [...list];

    // Mutate the Newly created array
    updatedList[listItemIndex].packed = !updatedList[listItemIndex].packed;

    // UPDATE THE STATE ONLY WITH THE NEW ARRAY
    setList((prevState) => {
      return updatedList;
    });
    // setList(
    //   list.map((item) => {
    //     item.id === id ? { ...item, packed: !item.packed } : item;
    //   })
  }

  function handleDeleteClick(id) {
    console.log("delete");
    const listItemIndex = list.indexOf(list.find((item) => item.id == id));
    console.log("listItemIndex", listItemIndex);

    const updatedList = [...list].filter((item) => item.id !== id);
    console.log("updatedList", updatedList);

    setList((prevState) => updatedList);
  }

  function handleNewItem(newItem) {
    console.log("handle New Item", newItem);
    setList((prevState) => [
      ...prevState,
      {
        id: uuidv4().split("-")[0],
        description: newItem[1],
        quantity: newItem[0],
        packed: false,
      },
    ]);
  }

  console.log("list", list);

  return (
    <div className="app">
      <h1>Travel List</h1>
      <Form handleSubmit={handleNewItem} />
      <List
        list={list}
        handleClick={handleListClick}
        handleDelete={handleDeleteClick}
      />
      <Stats />
    </div>
  );
}
