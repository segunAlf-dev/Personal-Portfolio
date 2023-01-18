import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SkillSet from "../src/Components/Skills/SkillSet";
import Projects from "./Pages/Projects/Projects.js";
import Footer from "./Components/Footer/Footer.js";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import Loader from "../src/Components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("#");

    useEffect(() => {
     //Stop the loader afer 2 secs
     setTimeout(() => setIsLoading(false), 2000);

     //Initialize Animate on scroll
     AOS.init({
       duration: 800,
       disable: function () {
         var maxWidth = 1024;
         return window.innerWidth < maxWidth;
       },
     });

     let section = document.querySelectorAll("section");

     window.addEventListener("scroll", (e) => {
       if (window.scrollY < 50) {
         setActiveNav(`#`);
       }

       section.forEach((sec) => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute("id");

         if (top >= offset && top < offset + height) {
           setActiveNav(`#${id}`);
         }
       });
     });
   }, [activeNav, isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <div id="App">
      <AnimatedCursor color="255,255,255" />

      <ResponsiveAppBar />
      {/* <Routers /> */}
      <Home />
      <About />
      <Projects />
      <SkillSet />
      <Footer />
    </div>
  );
  
}
export default App;

// function App() {
//   return
//    <div id="App">
//    <AnimatedCursor color="255,255,255" />;
//    <Routers />;
//    </div>;
// }
// export default App;
