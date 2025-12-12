"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white hover:text-blue-300 transition">
          CPISolution
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Nav links */}
        <div
          className={`${open ? "block" : "hidden"} 
                      md:flex gap-8 items-center text-lg font-medium`}
        >
          {[
            ["Research", "/research"],
            ["AI", "/research/ai"],
            ["Genetics", "/research/genetics"],
            ["Stem Cells", "/research/stemcells"],
            ["Cell Reprogramming", "/research/cell_reprogramming"],
            ["Leadership", "/research/leadership"],
            ["Breakthroughs", "/research/breakthroughs"],
            ["Posts", "/posts"],
            ["Ideas", "/ideas"],
            ["Contact", "/contact"]
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-white/90 hover:text-white transition relative group"
            >
              {label}
              {/* Underline hover animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}