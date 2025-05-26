'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-t-4 border-yellow-400 bg-[#030344cc] backdrop-blur-sm text-white flex items-center justify-between px-6 py-4">
  <a href="#" className="text-yellow font-bold text-lg hover:underline">DevPortfolio</a>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 text-sm">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>

      {/* Mobile nav toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030344] text-white flex flex-col items-center space-y-4 p-6 md:hidden">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-400">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-400">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-400">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-400">Contact</a>
        </div>
      )}
    </header>
  );
}
