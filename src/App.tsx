import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header />
      <main className="s-content">
        <Intro />
        <About />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
