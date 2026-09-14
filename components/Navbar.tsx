"use client";

import { useState } from "react";

import { teamInfo } from "@/data/team";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 shadow-lg shadow-black/5 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:text-cyan-400 sm:text-2xl"
        >
          App
          <span className="text-cyan-400">
            Folor
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-cyan-300 md:inline-flex"
        >
          Start a Project
        </a>

        <button
          type="button"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="rounded-lg border-b border-white/5 px-2 py-4 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:pl-4 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Start a Project
            </a>

            <p className="mt-6 text-center text-xs text-zinc-600">
              {teamInfo.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}