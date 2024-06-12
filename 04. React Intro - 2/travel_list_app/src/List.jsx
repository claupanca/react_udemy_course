import { useEffect, useState } from "react";

import ListItem from "./ListItem";

export default function List({
  list,
  onItemClick,
  onDeleteClick,
  onChangeSort,
  onClearClick,
}) {
  // function handleListClick(id) {
  //   // console.log("id from list is", id);
  //   onItemClick(id);
  // }

  // function handleDeleteClick(id) {
  //   onDeleteClick(id);
  // }

  const [sortBy, setSortBy] = useState("input");

  useEffect(() => {
    console.log("sorted by", sortBy);
    onChangeSort(sortBy);
  }, [sortBy]);

  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <ListItem
            key={item.id}
            info={item}
            onItemClick={onItemClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          onChange={(e) => setSortBy((prevState) => e.target.value)}
          value={sortBy}
        >
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>

        <button className="clear" onClick={onClearClick}>
          Clear Packed
        </button>
      </div>
    </div>
  );
}
