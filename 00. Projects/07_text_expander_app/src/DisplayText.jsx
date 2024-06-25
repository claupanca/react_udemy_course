import { useState } from "react";
import ShowButton from "./ShowButton";

export default function DisplayText({
  text,
  defaultExpanded = false,
  numOfWords = 10,
  showText = "Show more",
  hideText = "Show less",
  color = "blue",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  return (
    <div>
      {isOpen && (
        <p className={className}>
          {text}
          <ShowButton
            hideText={hideText}
            showText={showText}
            expanded={isOpen}
            setExpand={setIsOpen}
            color={color}
          />
        </p>
      )}
      {!isOpen && (
        <p className={className}>
          {text.split(" ").slice(0, numOfWords).join(" ")} {isOpen || "... "}
          <ShowButton
            hideText={hideText}
            showText={showText}
            expanded={isOpen}
            setExpand={setIsOpen}
            color={color}
          />
        </p>
      )}
    </div>
  );
}

{
  /* <p>
          {text.split(" ").slice(0, numOfWords).join(" ")} {isOpen || "..."}
          <span>{isOpen ? hideText : showText}</span>
        </p> */
}
