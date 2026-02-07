import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import BackgroundCanvas from "./components/three/BackgroundCanvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import CustomCursor from "./components/CustomCursor";
import ProjectModal from "./components/ProjectModal";
import LoadingScreen from "./components/LoadingScreen";
import Lenis from "lenis";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Scroll Animations
    gsap.to(".text-gradient", {
      backgroundPosition: "200% center",
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <BackgroundCanvas selectedProject={selectedProject} />
      <Navbar />

      <main>
        <Hero />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <About />
        <Connect />
        <Footer />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Dynamic Overlay Elements */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-mercury-dark/20 z-40 hidden md:block" />
    </div>
  );
}

export default App;
