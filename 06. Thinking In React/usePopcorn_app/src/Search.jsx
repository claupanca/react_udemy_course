import { useState, useRef, useEffect } from "react";

export default function Search({ search, setSearch, inputElement }) {
  // we are LIFTING THE REF UP
  // const inputElement = useRef(null);

  //we use this effect to set the focus() on the ref element, on the initial Mount
  useEffect(() => {
    console.log("input element", inputElement.current);
    inputElement.current.focus();
  }, []);

  return (
    <input
      className="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Start typing"
      ref={inputElement}
    ></input>
  );
}
