import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Education from "./components/sections/Education/Education";
import Experience from "./components/sections/Experience/Experience";
import Training from "./components/sections/Training/Training";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070b14",
        color: "white",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;