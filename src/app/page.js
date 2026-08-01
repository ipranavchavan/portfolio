import Navigation from '../components/navigation';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Experience from '../components/experience';
import Education from '../components/education';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
