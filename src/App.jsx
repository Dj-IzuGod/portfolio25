import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Tech from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
