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
        placeholder="Search Order #"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </form>
  );
}
