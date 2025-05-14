'use client';

export default function LogoLoop() {
  const logos = [
    'github.png', 'nextjs.png', 'autodesk.png', 'autocad.png',
    'css.png', 'html.png', 'js.png', 'wordpress.png',
    'vscode.png', 'react.png', 'tailwind.png', 'node.png', 'figma.png'
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>

      <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`/logos/${logo}`}
            alt={logo}
            className="h-12 w-12 object-contain"
          />
        ))}
      </div>

      <p className="max-w-xl mx-auto text-sm text-gray-600 dark:text-gray-300 px-4">
        I have experience with a variety of technologies and tools, specializing in frontend development with React and Next.js.
        My skills also include design with Figma and technical drawing with AutoCAD and Autodesk products.
      </p>
    </section>
  );
}
