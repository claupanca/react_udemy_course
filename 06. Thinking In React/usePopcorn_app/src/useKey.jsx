import { useRef, useEffect } from "react";

// this custom hook will abstract the event handler for a key press
export default function useKey(keyCode) {
  const input = useRef(null);

  useEffect(() => {
    function handleEnterKey(e) {
      // console.log("A key has been pressed", e);
      if (e.keyCode === keyCode) {
        console.log("Enter has been pressed");
        // we are using this REF to pass the focus() on the search element
        input.current.focus();
      }
    }

    document.addEventListener("keydown", handleEnterKey);
    // We have to CLEANUP THE EVENT LISTENER
    // since this will run on every rerender
    return function cleanup() {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, []);

  return input;
}
