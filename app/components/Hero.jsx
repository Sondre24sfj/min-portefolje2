'use client';
import Image from 'next/image';
import profilbilde from '/public/logos/profilbilde.jpg';

export default function Hero() {
  return (
    <section className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Bilde */}
        <div className="flex-shrink-0">
          <Image
            src={profilbilde}
            alt="Sondre Akerholt"
            width={180}
            height={240}
            className="rounded-xl"
          />
        </div>

        {/* Tekst */}
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Hi, I'm <span className="text-blue-400">Sondre Akerholt</span>
          </h1>
          <h2 className="text-yellow-400 text-lg font-semibold mb-2">
            Junior Frontend Developer
          </h2>
          <p className="text-white text-md">
            I build beautiful, responsive websites with modern technologies and UX design.
            <br />
            Passionate about creating seamless user experiences and clean code.
          </p>
        </div>
      </div>
    </section>
  );
}
