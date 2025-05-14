export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 shadow bg-white text-sm">
      <h1 className="text-xl font-bold text-blue-600">DevPortfolio</h1>
      <nav className="space-x-4 hidden md:flex">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}
