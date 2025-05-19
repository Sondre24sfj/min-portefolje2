export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 max-w-6xl mx-auto">
      <img
        src="/logos/profilbilde.jpg"
        alt="Sondre Akerholt"
        className="w-40 h-40 rounded-xl object-cover"
      />
      <div>
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-1">
          Hi, I'm <span className="text-blue-400">Sondre Akerholt</span>
        </h1>
        <h2 className="text-yellow font-semibold text-lg mb-2">Junior Frontend Developer</h2>
        <p className="text-sm text-white max-w-md leading-snug">
          I build beautiful, responsive websites with modern technologies. Passionate
          about creating seamless user experiences and clean code.
        </p>
      </div>
    </section>
  );
}
