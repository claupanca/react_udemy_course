import { Link } from "react-router-dom";

export default function Button({ text, disabled = false, to, children, type }) {
  const base =
    "mt-3 rounded-full bg-green-600 inline-block font-semibold uppercase tracking-wide text-green-100 transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-500";

  const styles = {
    primary: base + " p-5",
    small: base + " mt-0 py-1 px-2 text-sm",
    secondary:
      base + " bg-gray-200 px-3 py-2 text-black hover:bg-red-100 border-2",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
