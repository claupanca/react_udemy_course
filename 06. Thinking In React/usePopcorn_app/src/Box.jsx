import { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      {isOpen && children}
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
