"use client";

import { Search } from "lucide-react";
import { useState, useMemo } from "react"
import {useTicket} from "@/store/useTicket"


const SearchBar = () => {
    const { query, setQuery } = useTicket();

  return (
    <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Cari daftar event..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
      />
    </div>
  );
};

export default SearchBar;
