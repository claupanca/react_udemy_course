import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <input
      className="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Start typing"
    ></input>
  );
}
