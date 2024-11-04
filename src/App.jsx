import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { FaHandPointer } from "react-icons/fa";
import Slider from "./slider/Slider";
import Footer from "./components/Footer";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);
  return (
    <div className="text-white">
      <Navbar />
      <main className="container">
        <Name />
        <About />
        <Project />
        <Skills />
      </main>
      <Slider />
      <Contact />
      <Footer />
      {scrollY > 400 && (
        <div className="fixed bottom-4 px-8 right-0">
          <a href="#up-btn" className=" duration-1000 transition-all ">
            <FaHandPointer className="text-4xl animate-bounce cursor-pointer text-yellow-400 " />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
