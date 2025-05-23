'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-t-4 border-yellow bg-[#030344cc] backdrop-blur-sm text-white flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <a href="#" className="text-yellow font-bold text-lg hover:underline">
  DevPortfolio
</a>

      {/* Desktop nav */}
      <nav className="text-yellow hidden md:flex space-x-6 text-sm">
        <a href="#about" className="hover:text-yellow">About</a>
        <a href="#skills" className="hover:text-yellow">Skills</a>
        <a href="#projects" className="hover:text-yellow">Projects</a>
        <a href="#contact" className="hover:text-yellow">Contact</a>
      </nav>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-yellow text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile nav menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#030344ee] flex flex-col items-center py-4 space-y-4 md:hidden text-sm z-40">
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-yellow">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-yellow">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-yellow">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow">Contact</a>
        </nav>
      )}
    </header>
  );
}
