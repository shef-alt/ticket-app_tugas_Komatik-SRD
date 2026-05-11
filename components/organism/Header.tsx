import Link from "next/link";
import SearchBar from "../molecules/SearchBar";
import LoginButton from "../molecules/LoginButton";
import { NAVTEXT } from "@/constants/theme";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-indigo p-2 rounded-lg"></div>
          <h1 className="text-xl font-bold tracking-tight text-indigo">
            Tiketku
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={NAVTEXT}>
            Home
          </Link>
          <Link href="/about" className={NAVTEXT}>
            About
          </Link>
          <Link href="/contact" className={NAVTEXT}>
            Contact
          </Link>
        </nav>
        <SearchBar />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
