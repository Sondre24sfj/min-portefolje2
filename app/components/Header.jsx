export default function Header() {
  return (
    <header className="bg-primary text-yellow px-6 py-4 text-sm flex justify-between items-center max-w-4xl mx-auto">
      <span className="font-bold">DevPortfolio</span>
      <nav className="space-x-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
