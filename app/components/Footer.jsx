export default function Footer() {
  return (
    <footer className="bg-[#030344] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-yellow-400 font-bold mb-3">DevPortfolio</h4>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Sondre Akerholt. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Hurtiglenker</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Contact</h4>
          <p className="text-sm">E-post: <a href="mailto:sondre24sfj@gmail.com" className="underline">sondre24sfj@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
