import Image from 'next/image';
import profilbilde from '/public/logos/profilbilde.jpg'; // Endre path hvis bildet ligger annet sted

export default function Hero() {
  return (
    <section className="container text-center pt-12">
      <h2 className="uppercase tracking-wide text-sm text-yellow">Profile</h2>
      <h1 className="text-3xl sm:text-4xl font-bold">
        <span className="text-yellow">Hi, I'm </span>
        <span className="text-[#67A5FF]">Sondre Akerholt</span>
      </h1>
      <p className="mt-2 text-white text-md">Junior Frontend Developer</p>

      <div className="flex justify-center mt-6">
        <Image
          src={profilbilde}
          alt="Profilbilde"
          width={100}
          height={100}
          className="rounded-xl border-4 border-yellow"
        />
      </div>

      <p className="mt-6 text-sm sm:text-base text-white leading-relaxed">
        I build beautiful, responsive websites with modern technologies. Passionate
        about creating seamless user experiences and clean code.
      </p>
    </section>
  );
}
