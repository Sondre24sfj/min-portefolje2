// app/components/LogoLoop.jsx
'use client';

const logos = [
  "github.png", "nextjs.png", "autodesk.png", "autocad.png",
  "css.png", "html.png", "js.png", "wordpress.png",
  "vscode.png", "react.png", "tailwind.png", "node.png", "figma.png",
];

export default function LogoLoop() {
  return (
    <section id="skills" className="w-full py-12 bg-gradient-to-r from-[#1e1e2f] via-[#2e2e58] to-[#3f3f7f] text-white">
      <h2 className="text-center text-xl font-bold mb-6">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={`/logos/${logo}`}
            alt={logo}
            className="w-12 h-12 object-contain bg-white rounded shadow-sm p-1"
          />
        ))}
      </div>
      <p className="mt-6 text-center text-sm max-w-xl mx-auto px-4">
        I have experience with a variety of technologies and tools, specializing in frontend development with React and Next.js. My skills also include design with Figma and technical drawing with AutoCAD and Autodesk products.
      </p>
    </section>
  );
}
