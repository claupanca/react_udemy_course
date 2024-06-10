export default function ListItem({ info, handleClick }) {
  // console.log("info", info);

  function handleListItemClick(e) {
    e.preventDefault();
    console.log("click handled");
    handleClick(e.target.id.split("-")[1]);
  }

  return (
    <li>
      <input
        type="checkbox"
        id={`check-${info.id}`}
        defaultChecked={info.packed}
        onClick={handleListItemClick}
      ></input>
      <label
        htmlFor={`check-${info.id}`}
        style={info.packed ? { textDecoration: "line-through" } : {}}
      >
        <span>{info.quantity} </span>
        <span>{info.description}</span>
      </label>
      <button>
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
