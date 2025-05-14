const logos = [
  'html.png', 'css.png', 'nextjs.png', 'react2.png',
  'js.png', 'nodejs.png', 'figma.png', 'autocad.png',
  'autodesk.png', 'wordpress.png', 'github.png', 'vite.png','tailwind.png','vscode.png'
]

export default function LogoLoop() {
  return (
    <div className="overflow-hidden whitespace-nowrap animate-scroll flex gap-8 justify-center items-center">
      {logos.map((logo, idx) => (
        <img key={idx} src={`/logos/${logo}`} alt="logo" className="h-12 w-auto inline-block" />
      ))}
    </div>
  )
}
