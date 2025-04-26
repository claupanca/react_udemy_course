import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <div>
      <Logo />
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
