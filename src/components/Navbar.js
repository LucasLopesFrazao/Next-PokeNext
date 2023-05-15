import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          src="/../public/pokebola.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
