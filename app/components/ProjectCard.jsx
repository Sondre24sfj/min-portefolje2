export default function ProjectCard({ title, description, link, logo }) {
  return (
    <div className="bg-yellow-400 text-[#030344] rounded-xl shadow-xl p-6 w-96 mx-auto transition-transform hover:scale-105 duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={logo}
          alt={`${title} logo`}
          className="h-12 object-contain"
        />
        <span className="text-xl font-bold">{title}</span>
      </div>
      <p className="text-sm mb-6">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline text-sm"
      >
        View Live
      </a>
    </div>
  );
}
