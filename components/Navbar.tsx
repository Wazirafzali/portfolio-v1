"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white"
        >
          Dev<span className="text-cyan-400">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition duration-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Hire Button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-zinc-950 md:block"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-base font-medium text-zinc-300 transition hover:pl-2 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}