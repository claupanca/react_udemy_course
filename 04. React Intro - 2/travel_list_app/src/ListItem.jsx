export default function ListItem({ info, handleClick }) {
  // console.log("info", info);

  function handleListItemClick() {
    console.log("click handled", info.id);
    handleClick(info.id);
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
        style={{ textDecoration: `${info.packed ? "line-through" : "none"}` }}
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
