export default function ListItem({ info, handleClick, handleDelete }) {
  console.log("info", info);

  // function handleListItemClick(e) {
  //   e.preventDefault();
  //   console.log("click handled");
  //   handleClick(e.target.id.split("-")[1]);
  // }

  function changeClick(e) {
    console.log("change click");
    handleClick(e.target.closest("li").id);
  }

  function deleteClick(e) {
    console.log("delete click");
    handleDelete(e.target.closest("li").id);
  }

  return (
    <li id={info.id}>
      <input
        type="checkbox"
        checked={info.packed}
        onChange={changeClick}
        id={`check-${info.id}`}
      ></input>
      <label
        htmlFor={`check-${info.id}`}
        style={info.packed ? { textDecoration: "line-through" } : {}}
      >
        <span>{info.quantity} </span>
        <span>{info.description}</span>
      </label>
      <button onClick={deleteClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}
