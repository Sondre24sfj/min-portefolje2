'use client';

export default function Hero() {
  return (
    <section className="min-h-screen text-white px-8 py-20 bg-gradient-to-r from-[#1e1e2f] via-[#5e2f84] to-[#2c3e50]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="text-[#F7DE00]">Hi, I'm </span>
          <span className="text-white">Sondre Akerholt</span>
        </h2>
        <p className="text-[#F7DE00] mt-2 text-xl">Junior Frontend Developer</p>
        <p className="mt-4 max-w-xl text-sm sm:text-base text-white">
          I build beautiful, responsive websites with modern technologies. Passionate about creating seamless user experiences and clean code.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          {[
            'js.png', 'css.png', 'html.png', 'nextjs.png',
            'react.png', 'tailwind.png', 'node.png',
            'github.png', 'figma.png', 'autocad.png', 'wordpress.png',
          ].map((logo, idx) => (
            <img
              key={idx}
              src={`/logos/${logo}`}
              alt={logo.replace('.png', '')}
              className="w-12 h-12 object-contain brightness-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
