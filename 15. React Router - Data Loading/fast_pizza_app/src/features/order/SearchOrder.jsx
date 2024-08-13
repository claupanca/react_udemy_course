import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm == "") return;

    // we progamatically navigate to the page and add the orderId
    navigate(`/order/${searchTerm}`);
    setSearchTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-full bg-red-100 px-3 py-2 text-sm transition-all duration-300 placeholder:text-red-900 focus:outline-none focus:ring focus:ring-red-900 sm:w-64 sm:focus:w-72"
        placeholder="Search Order #"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </form>
  );
}
