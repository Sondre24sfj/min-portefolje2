// app/components/Header.jsx
'use client';

export default function Header() {
  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-blue-600 text-sm md:text-base">DevPortfolio</h1>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
