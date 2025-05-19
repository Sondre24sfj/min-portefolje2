'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">DevPortfolio</div>

      {/* Desktop-nav */}
      <nav className="nav-desktop">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      {/* Mobil toggle */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Mobil-nav */}
      {isOpen && (
        <div className="nav-mobile">
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

      <div className="moon-icon">
        <FaMoon />
      </div>
    </header>
  );
}
