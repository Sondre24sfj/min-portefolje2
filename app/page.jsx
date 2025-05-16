import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <Header />

      {/* Profile Section */}
      <section className="text-yellow text-center pt-10">
        <h2 className="text-sm uppercase mb-2">Profile</h2>
        <h1 className="text-3xl font-bold text-white">
          Hi, I'm <span className="text-yellow">Sondre Akerholt</span>
        </h1>
        <h3 className="text-yellow text-md font-medium mt-2">Junior Frontend Developer</h3>
        <p className="text-white text-sm mt-4 px-4">
          I build beautiful, responsive websites with modern technologies.
          Passionate about creating seamless user experiences and clean code.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="text-center py-12">
        <h2 className="text-yellow font-bold mb-4">About me</h2>
        <p className="text-white text-sm px-4">
          I am 26 years old, from Hof, and currently doing third year at Noroff. I enjoy clothing, nature, video editing, gaming, music and family/friends.
        </p>
        <p className="text-white text-sm mt-4 px-4">
          I have completed an internship at Kodehode/Smart Media Digital – result of Ready for Job course. I look forward to get a job in frontend.
        </p>
        <p className="text-white text-sm mt-4 px-4">
          By time I’ve learned the stack with: HTML, CSS, JavaScript, React, NextJs, Tailwind. I also practice design systems with AutoCAD, Autodesk, and WordPress.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#020234] py-10 text-center">
        <h2 className="text-yellow font-bold mb-6">Skills & Technologies</h2>
        <div className="flex justify-center flex-wrap gap-6 mb-4">
          {[
            'js', 'css', 'html', 'nextjs', 'react', 'tailwind',
            'github2', 'figma', 'autocad', 'wordpress'
          ].map(name => (
            <img key={name} src={`/logos/${name}.png`} alt={name} className="h-10 w-auto" />
          ))}
        </div>
        <p className="text-white text-sm px-4 max-w-2xl mx-auto">
          I have experience with a variety of technologies and tools, specializing in frontend development with React and Next.js.
          My skills also include design with Figma and technical drawing with AutoCAD and Autodesk products.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-yellow text-primary py-10 text-center">
        <h2 className="font-bold mb-6">Recent Projects</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <ProjectCard
            title="WIKE&Co"
            image="/logos/wike.png"
            link="https://wike.vercel.app"
          />
          <ProjectCard
            title="GitHub"
            image="/logos/github2.png"
            link="https://github.com/SondreAkerholt"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
