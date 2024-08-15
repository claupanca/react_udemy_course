import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/user/User";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-solid border-green-300 bg-red-600 px-3 py-3 font-semibold uppercase sm:px-6">
      {/* will take us back to the homepage -- LOGO */}
      <Link to="/" className="tracking-wide">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}
