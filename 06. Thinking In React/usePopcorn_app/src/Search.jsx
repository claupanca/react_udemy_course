import { useState } from "react";

export default function Search({ search, setSearch }) {
  return (
    <input
      className="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Start typing"
    ></input>
  );
}
