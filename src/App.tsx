import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";
import { ScrollContextProvider } from "./context/ScrollContext";

function App() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  console.log("🚀 ~ App ~ activeSection:", activeSection);
  const handleClick = (section: string) => {
    const sectionRef = document.getElementById(section);
    sectionRef?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <>
      <ScrollContextProvider>
        <div className="s-pagewrap">
          <Header handleClick={handleClick} activeSection={activeSection} />
          <main className="s-content">
            <Intro />
            <About />
            <Work />
          </main>
          <Footer />
        </div>
      </ScrollContextProvider>
    </>
  );
}

export default App;
