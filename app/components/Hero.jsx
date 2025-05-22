export default function Hero() {
  return (
    <section className="text-center bh-screen text-white py-24 px-4">
      <img
        src="/profilbilde.jpg"
        alt="Profil"
        className="w-40 h-59 rounded-xl mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-yellow mb-2">
        Hi, I'm <span className="text-blue-400">[Sondre Akerholt]</span>
      </h1>
      <h2 className="text-yellow font-semibold mb-2">
        Junior Frontend Developer
      </h2>
      <p className="max-w-xl mx-auto text-sm leading-relaxed">
        I build beautiful, responsive websites with modern technologies and UX design.
        Passionate about creating seamless user experiences and clean code.
      </p>
    </section>
  );
}
