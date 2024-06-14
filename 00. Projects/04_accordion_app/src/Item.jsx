import { useState } from "react";

export default function Item({ info, index, isOpen, onToggleClick }) {
  const title = info.title;
  const text = info.text;
  const number = index + 1;

  // each item has it's own STATE to be kept open or not
  // const [isOpen, setIsOpen] = useState(false);

  // we are lifting the state of each item UP in the APP to keep only 1 item opened at a time

  // function handleClick() {
  //   setIsOpen((prevState) => !prevState);
  // }

  return (
    <div
      className={`item ${isOpen ? `open` : ``}`}
      // onClick={() => setIsOpen((prevState) => !prevState)}
      onClick={() => onToggleClick(index)}
    >
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {/* conditional DISPLAY based on the isOpen piece of state */}
      {isOpen && (
        <div
          className="content-box"
          // style={{ display: `${isOpen ? `block` : `none`}` }}
        >
          {text}
        </div>
      )}
    </div>
  );
}
