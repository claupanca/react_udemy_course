import { useEffect } from "react";
import { useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  // detecting a click outside the modal
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      // console.log("e", e.target);
      // console.log("ref", ref.current);
      // check if it exists
      if (ref.current) {
        if (!ref.current.contains(e.target)) {
          handler();
        }
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
