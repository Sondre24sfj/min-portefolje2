// app/page.jsx
import Header from './components/Header';
import LogoLoop from './components/LogoLoop';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero, About osv. kan legges her */}
        <section id="skills" className="my-10">
          <LogoLoop />
        </section>
      </main>
    </div>
  );
}
