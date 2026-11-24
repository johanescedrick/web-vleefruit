"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#prototipe", label: "Prototipe" },
  { href: "#deteksi", label: "Deteksi" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#harga", label: "Harga" },
  { href: "#tim", label: "Tim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="VleeFruit, kembali ke atas">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-leaf-900 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-mango">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden rounded-full border-[1.5px] border-leaf-800 px-5 py-2 text-sm font-semibold text-leaf-800 transition hover:bg-leaf-800 hover:text-cream lg:inline-block"
        >
          Jadwalkan demo
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-leaf-900 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-cream px-4 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line/60 py-3 font-medium text-leaf-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-leaf-800 py-3 text-center font-semibold text-cream"
          >
            Jadwalkan demo
          </a>
        </nav>
      )}
    </header>
  );
}
