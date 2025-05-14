import Header from '../components/Header'
import Footer from '../components/Footer'
import LogoLoop from '../components/LogoLoop'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center text-black dark:text-white">
      <Header />

      <section className="text-center py-16 bg-gradient-to-b from-blue-100 to-white w-full">
        <img src="/profile.jpg" alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Hi, I'm <span className="text-blue-600">Sondre Akerholt</span></h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Junior Frontend Developer</p>
        <p className="mt-2 max-w-xl mx-auto text-sm text-gray-600 dark:text-gray-400">
          I build beautiful, responsive websites with modern technologies. Passionate about creating seamless user experiences and clean code.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Get in touch</button>
      </section>

      <section className="py-16 px-4 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>Passionate frontend developer with experience in building responsive web apps using React and modern tooling.</p>
      </section>

      <section className="bg-gray-100 w-full py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
        <LogoLoop />
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
        <div className="max-w-md mx-auto bg-white shadow-md p-4 rounded">
          <img src="/project.png" alt="Project" className="rounded mb-4" />
          <h3 className="text-xl font-bold">Project Title</h3>
          <p className="text-sm text-gray-600">Short project description here.</p>
        </div>
      </section>

      <section className="bg-gray-100 w-full py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded border" />
          <textarea placeholder="Message" className="w-full p-2 rounded border" rows="4" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
