
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section id="hero" className="bg-white">
        <Hero />
      </section>
      <section id="about" className="bg-gray-50/30">
        <About />
      </section>
      <section id="experience" className="bg-white">
        <Experience />
      </section>
      <section id="publications" className="bg-gray-50/40">
        <Publications />
      </section>
      <section id="education" className="bg-white">
        <Education />
      </section>
      <section id="projects" className="bg-gray-50/50">
        <Projects />
      </section>
      <section id="contact" className="bg-gray-50/60">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
