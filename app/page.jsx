'use client';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import LogoLoop from './components/LogoLoop';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="bg-primary text-white font-sans">

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section className="text-center max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-yellow text-xl font-semibold mb-4">About me</h2>
        <p className="mb-4">
          I am 33 years old, from Hof, and currently living there. In my free time, I enjoy climbing,
          hunting, outdoor activities, spending time with friends and family.
        </p>
        <p className="mb-4">
          I have completed a course through Jobloop/Kodehodet consisting of 8 months of theory
          and will now begin 4 months of practical training in a company.
        </p>
        <p>
          During the course, I have worked with: HTML, CSS, JavaScript, Node, React, Next.js, Tailwind, Figma,
          GitHub, PostCSS, and Visual Studio Code. In addition, I have previous experience with AutoCAD,
          Autodesk, and WordPress.
        </p>
      </section>

      {/* SKILLS */}
      <section className="text-center bg-[#1b1b30] py-10">
        <h2 className="text-yellow text-lg font-semibold mb-6">Skills & Technologies</h2>
        <LogoLoop />
        <p className="text-white mt-6 text-base font-light px-4 max-w-3xl mx-auto">
          I have experience with a variety of technologies and tools, specializing in frontend
          development with React and Next.js. My skills also include design with Figma and
          technical drawing with AutoCAD and Autodesk products.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="bg-yellow text-primary py-16 text-center">
        <h2 className="bg-[#1F2567] text-lg font-bold mb-10">Recent Projects</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-4">
          <ProjectCard
            title="Wike & Co"
            description="Created a website for a machine contracting company."
            link="https://wikeco.no/"
            image="/logos/wike.png"
            logo="/logos/wike.svg"
          />
          <ProjectCard
            title="GitHub"
            description="https://github.com/Sondre24sfj"
            link="https://github.com/Sondre24sfj"
            image="/logos/github4.png"
            logo="/logos/github4.svg"
          />
        </div>
      </section>
      <ContactForm />
    </div>
    
  );
}
