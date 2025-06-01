export default function LogoLoop() {
  const logos = [
    'icon-github.png', 'nextjs.png', 'autodesk.png', 'autocad.png', 'css.png',
    'html.png', 'js.png', 'wordpress.png', 'vscode.png', 'react.png',
    'tailwind.png', 'node.png', 'figma.png', 'vite.png', 'postcss.png', 'C++.png', 'qt-2.png',
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 px-4">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`/logos/${logo}`}
          alt={`logo-${index}`}
          className="h-10 w-10 object-contain"
        />
      ))}
    </div>
  );
}
