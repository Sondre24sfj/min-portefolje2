import Image from 'next/image';

export default function ProjectCard({ title, description, link, image, logo }) {
  return (
    <div className="bg-primary text-white w-full max-w-xs rounded-xl p-6 shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <Image src={logo} alt={title} width={100} height={100} className="object-contain" />
      </div>
      <h3 className="text-yellow text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 underline hover:text-red-700"
      >
        View Live
      </a>
    </div>
  );
}
