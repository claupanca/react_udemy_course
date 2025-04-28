import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/cabins'>Explore the Cabins</Link>
        </li>
        <li>
          <Link href='/about'>About Wild Oasis</Link>
        </li>
        <li>
          <Link href='/account'>Account</Link>
        </li>
      </ul>
    </div>
  );
}
