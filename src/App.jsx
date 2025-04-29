import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import noisyBackground from '/assets/noisy-background.png';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 z-0" />

      <div
        className="absolute inset-0 bg-repeat opacity-15 z-10"
        style={{
          backgroundImage: `url(${noisyBackground})`,
          backgroundSize: "200px 200px", // Smaller size for mobile
        }}
      />

      {/* Actual content */}
      <div className="relative z-20 text-white px-4 sm:px-8">
        <Hero />
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
