import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function List({ title, items, render }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((prevState) => !prevState);
  }

  const showElements = show ? items.slice(0, 3) : items;

  return (
    <div className="listContainer">
      <div className="header">
        <h2>{title}</h2>
        <button onClick={() => handleShow()}>
          {show ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </div>
      <div className="main">
        <ul>{showElements.map(render)}</ul>

        <button className="showAll" onClick={() => handleShow()}>
          {!show ? `Show Less` : `Show all ${items.length} items`}
        </button>
      </div>
    </div>
  );
}
