"use client";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import LogoLoop from "./components/LogoLoop";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <main className="relative text-white font-sans">
                <Hero />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#030344]/90 -z-1"/>
      {/* <section className="h-screen bg-amber-300 z-10">gbjjifgbsd</section> */}
      {/* Innhold over video */}
      <div className=" z-20 space-y-16">
        
    {/* HERO + ABOUT */}
<section
  id="about"
  className="relative flex flex-col justify-center items-center text-center w-full h-screen px-4 z-10"
>
  {/* Bakgrunnsvideo */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-screen h-full object-cover -z-1"
  >
    <source src="/code-blue-4.mp4" type="video/mp4" />
  </video>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#030344]/90 -z-0" />

  {/* Tekstinnhold */}
  <div className="relative z-10 max-w-3xl px-6">
    <h2 className="text-yellow text-2xl font-extrabold mb-6">About me</h2>
    <p className="mb-4 text-xl font-bold leading-relaxed">
      I am 33 years old, from Hof in Vestfold and currently living there. In my free time,
      I enjoy climbing, watching sports, outdoor activities, spending time with friends and family.
    </p>
    <p className="mb-4 text-xl font-bold leading-relaxed">
      I have completed a course through Jobloop/Kodehodet consisting of 8 months of theory
      and will now begin 4 months of practical training in a company.
    </p>
    <p className="text-xl font-bold leading-relaxed">
      During the course, I have worked with: HTML, CSS, JavaScript, Node, React, Next.js,
      Tailwind, Figma, GitHub, PostCSS, and Visual Studio Code. In addition, I have previous
      experience with AutoCAD, Autodesk, and WordPress.
    </p>
  </div>
</section>


        {/* SKILLS */}
        <section id="skills" className="text-center px-6">
          <h2 className="section-title">Skills & Technologies</h2>
          <LogoLoop />
          <p className="max-w-2xl mx-auto text-xl font-bold mt-4">
            I have experience with a variety of technologies and tools,
            specializing in frontend development with React and Next.js. My
            skills also include design with Figma and technical drawing with
            AutoCAD and Autodesk products.
          </p>
        </section>

        {/* PROJECTS */}
<section id="projects" className="text-center px-6 bg-[#030344]/90 py-12">
  <h2 className="section-title text-yellow mb-10">Recent Projects</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
<ProjectCard
  /*title="Wike & Co"*/
  description="Created a website for a machine contracting company."
  link="https://wikeco.no/"
  image="/logos/wikecard.png" // VIKTIG
  logo="/logos/wike.png" // <- eksakt filnavn
/>

<ProjectCard
  /*title="GitHub"*/
  description="https://github.com/Sondre24sfj
  Project"
  link="https://github.com/Sondre24sfj"
  image="/logos/github4.png" // VIKTIG
  logo="/logos/github4.png" // <- eksakt filnavn
/>
  </div>
</section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-black text-contact-bg-white px-6 py-12"
        >
          <h2 className="section-title text-contact-bg-white mb-8">Get in Touch</h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
