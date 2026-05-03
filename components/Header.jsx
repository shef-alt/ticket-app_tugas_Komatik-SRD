import { Search } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-indigo-600 p-2 rounded-lg"></div>
          <h1 className="text-xl font-bold tracking-tight text-indigo-600">
            Tiketku
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium transition-colors text-slate-500 hover:text-indigo-600`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors text-slate-500 hover:text-indigo-600`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors text-slate-500 hover:text-indigo-600`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Cari event impianmu..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
          Masuk
        </button>
      </div>
    </header>
  );
};

export default Header;
