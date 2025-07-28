import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import InfoSection from "./components/InfoSection";
import About from "./components/About";
import Footer from "./components/Footer";
import MenuMarquee from "./components/MenuMarquee";

const App = () => {
  return (
    <div>
      <Hero />
      <Quality />
      <MenuMarquee />
      <About />

      <InfoSection />
    </div>
  );
};

export default App;
