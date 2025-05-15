// app/components/LogoLoop.jsx
'use client';

export default function LogoLoop() {
  const logos = [
    'github.png', 'nextjs.png', 'autodesk.png', 'autocad.png', 'css.png',
    'html.png', 'js.png', 'wordpress.png', 'vscode.png',
    'react.png', 'tailwind.png', 'node.png', 'figma.png'
  ];

  return (
    <section className="bg-gradient-to-r from-[#1e1e2f] via-[#2e2e58] to-[#3f3f7f] py-10 text-center text-white">
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>

      <div className="flex justify-center flex-wrap gap-6 px-4">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={`/logos/${logo}`}
            alt={logo}
            className="h-12 w-12 object-contain"
          />
        ))}
      </div>

      <p className="mt-6 max-w-xl mx-auto text-sm text-gray-200 px-4">
        I have experience with a variety of technologies and tools, specializing in frontend
        development with React and Next.js. My skills also include design with Figma and technical
        drawing with AutoCAD and Autodesk products.
      </p>
    </section>
  );
}
