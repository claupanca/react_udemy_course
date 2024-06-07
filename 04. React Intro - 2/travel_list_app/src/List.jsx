import ListItem from "./ListItem";

export default function List({ list, handleClick }) {
  function handleListClick(id) {
    // console.log("id from list is", id);
    handleClick(id);
  }

  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} info={item} handleClick={handleListClick} />
        ))}
      </ul>
    </div>
  );
}
