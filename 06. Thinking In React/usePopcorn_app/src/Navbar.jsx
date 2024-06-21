import { useState } from "react";
import Search from "./Search";

export default function Navbar({ children }) {
  const [search, setSearch] = useState("");

  return <nav className="nav-bar">{children}</nav>;
}
