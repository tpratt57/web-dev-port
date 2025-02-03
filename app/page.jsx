// app/page.jsx
import LoadingWrapper from "./components/LoadingWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <LoadingWrapper>
      <ParticleBackground/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </LoadingWrapper>
  );
}
