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
          className="relative pt-24 px-4 text-center w-full mx-auto z-10"
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

          <h2 className="text-yellow text-lg font-semibold mt-8 mb-4">
            About me
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            I am 33 years old, from Hof, and currently living there. In my free
            time, I enjoy climbing, watching sports, outdoor activities,
            spending time with friends and family.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            I have completed a course through Jobloop/Kodehodet consisting of 8
            months of theory and will now begin 4 months of practical training
            in a company.
          </p>
          <p className="text-sm leading-relaxed">
            During the course, I have worked with: HTML, CSS, JavaScript, Node,
            React, Next.js, Tailwind, Figma, GitHub, PostCSS, and Visual Studio
            Code. In addition, I have previous experience with AutoCAD,
            Autodesk, and WordPress.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="text-center px-6">
          <h2 className="section-title">Skills & Technologies</h2>
          <LogoLoop />
          <p className="max-w-2xl mx-auto text-sm mt-4">
            I have experience with a variety of technologies and tools,
            specializing in frontend development with React and Next.js. My
            skills also include design with Figma and technical drawing with
            AutoCAD and Autodesk products.
          </p>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="text-center px-6 bg-[#030344]/90 py-12"
        >
          <h2 className="section-title text-yellow mb-10">Recent Projects</h2>
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

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-amber-500 text-contact-bg px-6 py-12"
        >
          <h2 className="section-title text-contact-bg mb-8">Get in Touch</h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
