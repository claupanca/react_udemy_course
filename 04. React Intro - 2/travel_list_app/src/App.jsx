import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialItems = [
  {
    id: uuidv4().split("-")[0],
    // id: new Date(),
    description: "Passports",
    quantity: 2,
    packed: true,
  },
  {
    id: uuidv4().split("-")[0],

    // not using uuid since we need to sort by input order
    // id: new Date(),
    description: "Socks",
    quantity: 12,
    packed: false,
  },
];

export default function App() {
  const [list, setList] = useState(() => initialItems);

  // Derived State - we compute the statistics based on our piece of state
  const statistics = [
    list.length,
    list.reduce((acc, item) => (item.packed ? acc + 1 : acc), 0),
  ];

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

  function handleAddItem(newItem) {
    console.log("handle New Item", newItem);
    setList((prevState) => [
      ...prevState,
      {
        id: uuidv4().split("-")[0],
        // id: new Date(),
        description: newItem[1],
        quantity: newItem[0],
        packed: false,
      },
    ]);
  }

  function handleSort(sortBy) {
    console.log("sort by", sortBy);
    // list.sort((a, b) => {
    //   console.log(a[sortBy]);
    //   console.log(b[sortBy]);
    // });

    let updatedList = [...list];
    if (sortBy === "input") {
      updatedList.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        else return 0;
      });
    }

    if (sortBy === "description") {
      updatedList.sort((a, b) => {
        if (a.description.toLowerCase() > b.description.toLowerCase()) return 1;
        if (a.description.toLowerCase() < b.description.toLowerCase())
          return -1;
        else return 0;
      });
    }

    if (sortBy === "packed") {
      updatedList.sort((a, b) => {
        if (a.packed > b.packed) return -1;
        if (a.packed < b.packed) return 1;
        else return 0;
      });
    }

    console.log("updatedList", updatedList);

    setList((prevState) => updatedList);
  }

  function handleClearPacked() {
    if (confirm("Are you sure to delete the packed items") == true)
      setList((prevState) => prevState.filter((item) => item.packed !== true));
    else return;
  }

  console.log("list", list);

  return (
    <div className="app">
      <h1>Travel List</h1>
      <Form onHandleSubmit={handleAddItem} />
      <List
        list={list}
        onItemClick={handleListClick}
        onDeleteClick={handleDeleteClick}
        onChangeSort={handleSort}
        onClearClick={handleClearPacked}
      />
      <Stats statistics={statistics} />
    </div>
  );
}
