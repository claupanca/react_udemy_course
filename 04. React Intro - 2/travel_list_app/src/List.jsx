import ListItem from "./ListItem";

export default function List({ list, handleClick, handleDelete }) {
  function handleListClick(id) {
    // console.log("id from list is", id);
    handleClick(id);
  }

  function handleDeleteClick(id) {
    handleDelete(id);
  }

  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <ListItem
            key={item.id}
            info={item}
            handleClick={handleListClick}
            handleDelete={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
