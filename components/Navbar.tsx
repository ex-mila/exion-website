"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { T, Lang } from "@/lib/translations";

interface NavbarProps {
  t: T["nav"];
  lang: Lang;
  onLangToggle: () => void;
}

export default function Navbar({ t, lang, onLangToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#111827]/06">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/logo_w.png"
              alt="EXIONLabs"
              width={120}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {t.links.map((link, i) => (
              <button
                key={link}
                onClick={() => handleNav(t.hrefs[i])}
                className="text-sm font-medium text-[#111827]/60 hover:text-[#111827] transition-colors duration-200 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onLangToggle}
              className="text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full border border-[#111827]/15 text-[#111827]/50 hover:border-[#009973] hover:text-[#009973] transition-all duration-200 cursor-pointer"
            >
              {lang === "en" ? "한국어" : "English"}
            </button>
            <button
              onClick={() => handleNav("#contact")}
              className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#009973] text-white hover:bg-[#007a5e] transition-colors duration-200 cursor-pointer"
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#111827] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-[#111827]/06">
          <Image src="/images/logo_w.png" alt="EXIONLabs" width={120} height={28} className="h-7 w-auto" />
        </div>
        <div className="flex flex-col px-6 pt-8 gap-2 flex-1">
          {t.links.map((link, i) => (
            <button
              key={link}
              onClick={() => handleNav(t.hrefs[i])}
              className="text-left text-2xl font-semibold text-[#111827] py-3 border-b border-[#111827]/08 hover:text-[#009973] transition-colors cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="px-6 pb-10 flex items-center gap-4">
          <button
            onClick={onLangToggle}
            className="text-xs font-semibold tracking-widest px-4 py-2 rounded-full border border-[#111827]/20 text-[#111827]/60 cursor-pointer"
          >
            {lang === "en" ? "한국어" : "English"}
          </button>
          <button
            onClick={() => handleNav("#contact")}
            className="flex-1 text-sm font-semibold py-3 rounded-full bg-[#009973] text-white cursor-pointer"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </>
  );
}
