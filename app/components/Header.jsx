'use client';

import { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-700">DevPortfolio</h1>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>

          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 space-y-2">
          <a href="#about" className="block text-gray-700 dark:text-gray-300">About</a>
          <a href="#skills" className="block text-gray-700 dark:text-gray-300">Skills</a>
          <a href="#projects" className="block text-gray-700 dark:text-gray-300">Projects</a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-300">Contact</a>
        </div>
      )}
    </header>
  );
}

