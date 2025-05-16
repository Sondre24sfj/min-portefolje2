export default function ProjectCard({ title, image, link }) {
  return (
    <div className="bg-yellow text-primary rounded-md p-4 flex flex-col items-center">
      <img src={image} alt={title} className="h-16 mb-4" />
      <h3 className="font-bold">{title}</h3>
      <a href={link} className="text-sm underline mt-2" target="_blank" rel="noreferrer">
        {link}
      </a>
    </div>
  );
}
