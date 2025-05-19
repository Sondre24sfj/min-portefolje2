export default function ProjectCard({ title, description, link, image, logo }) {
  return (
    <div className="bg-primary text-white rounded-xl shadow-lg p-6 w-72 mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <img src={image} alt="logo" className="h-10 w-10 rounded-full object-cover" />
        <span className="font-bold">{title}</span>
      </div>
      <p className="text-sm mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-500 underline text-sm">
        View Live
      </a>
      <div className="mt-4">
     
      </div>
    </div>
  );
}

