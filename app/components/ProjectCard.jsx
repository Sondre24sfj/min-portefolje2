export default function ProjectCard({ title, description, link, logo }) {
  return (
    <div className="bg-yellow-400 text-[#030344] rounded-xl shadow-xl w-full max-w-xs mx-auto p-6 transition-transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-4">
        <img src={logo} alt={`${title} logo`} className="h-12 object-contain" />
      </div>
      <span className="text-xl font-bold block text-center">{title}</span>
      <p className="text-sm my-4 text-center">{description}</p>
      <div className="text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline text-sm"
        >
          View Live
        </a>
      </div>
    </div>
  );
}
