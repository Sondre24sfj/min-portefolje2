import Header from '../app/components/Header'
import LogoLoop from '../app/components/LogoLoop'


export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero, About etc... */}
        <section id="skills" className="my-10">
          <LogoLoop />
        </section>
      </main>
    </div>
  );
}
