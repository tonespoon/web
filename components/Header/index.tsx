import Link from "next/link";
import Logo from "@/components/Logo";

export const Header = () => (
  <div className="w-full bg-white h-12 bg-white-300 flex flex-row justify-between items-center align-center p-4">
    <Link href="/">
      <Logo />
    </Link>

    <nav className="p-3 text-black flex-row justify-end items-center w-full lg:flex hidden">
      <Link href="/reviews" className="ml-6">
        Reviews
      </Link>
      <Link href="/staff-picks" className="ml-6">
        Staff Picks
      </Link>
      <Link href="/shuffle" className="ml-6">
        Shuffle
      </Link>
    </nav>
  </div>
);
