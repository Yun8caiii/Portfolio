import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className='App'>
        <NavBar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;
