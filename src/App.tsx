import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";
import { ScrollContextProvider } from "./context/ScrollContext";
// import { motion } from "framer-motion";
import Skill from "./components/Skill";

function App() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = () => {
      // setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  const handleClick = (section: string) => {
    const sectionRef = document.getElementById(section);
    sectionRef?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <>
      <ScrollContextProvider>
        {/* <motion.div
          className="custom-cursor"
          animate={{ x: position.x - 10, y: position.y - 10 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        /> */}
        <div className="s-pagewrap">
          <Header handleClick={handleClick} activeSection={activeSection} />
          <main className="s-content">
            <Intro />
            <About />
            <Skill />
            <Work />
          </main>
          <Footer />
        </div>
      </ScrollContextProvider>
    </>
  );
}

export default App;
