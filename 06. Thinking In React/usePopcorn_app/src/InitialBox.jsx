import { useState } from "react";
import InitialList from "./InitialList";
import ToggleButton from "./ToggleButton";

// NOT USED ANYMORE SINCE WE HAVE CREATED THE REUSABLE BOX component
export default function InitialBox({ foundItems }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      {isOpen && <InitialList movies={foundItems} />}
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
