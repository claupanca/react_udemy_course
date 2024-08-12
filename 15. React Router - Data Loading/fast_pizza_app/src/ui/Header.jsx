import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      {/* will take us back to the homepage -- LOGO */}
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <h2>User Name</h2>
    </header>
  );
}
