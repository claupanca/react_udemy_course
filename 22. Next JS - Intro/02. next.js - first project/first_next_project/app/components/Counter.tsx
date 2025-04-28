"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [counter, setCounter] = useState(0);

  console.log("THis will log into the browser", users);

  return (
    <div>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Add 1
      </button>
      <div>{counter}</div>
    </div>
  );
}
