import { Link } from "react-router-dom";

export default function LinkButton({ to, text, onClick, children }) {
  return (
    <Link
      to={to}
      className="text-sm text-blue-400 hover:text-blue-700"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
