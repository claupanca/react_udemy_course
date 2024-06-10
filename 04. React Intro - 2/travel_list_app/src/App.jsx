import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [list, setList] = useState(() => initialItems);
  let counter = 3;

  function handleListClick(id) {
    console.log("id from APP", id);
    const listItemIndex = list.indexOf(list.find((item) => item.id == id));
    console.log("listItemIndex", listItemIndex);
    setList((prevState) => {
      // console.log("in set List");
      const updatedList = [...prevState];
      // console.log("updatedList", [...updatedList]);
      console.log("packed before", updatedList[listItemIndex].packed);
      updatedList[listItemIndex].packed = !updatedList[listItemIndex].packed;

      console.log("packed after", updatedList[listItemIndex].packed);

      console.log("updated List", updatedList);
      return updatedList;
    });
  }

  function handleNewItem(newItem) {
    console.log("handle New Item", newItem);
    setList((prevState) => [
      ...prevState,
      {
        id: counter++,
        description: newItem[1],
        quantity: newItem[0],
        packed: false,
      },
    ]);
  }

  console.log("list", list);
  // ,

  return (
    <div className="app">
      <h1>Travel List</h1>
      <Form handleSubmit={handleNewItem} />
      <List list={list} handleClick={handleListClick} />
      <Stats />
    </div>
  );
}
