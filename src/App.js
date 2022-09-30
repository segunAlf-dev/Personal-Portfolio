import React from 'react';
// import './App.css';
import ResponsiveAppBar from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
// import Blog from './Components/Blog/Blog';
// import Contact from './Components/Contact/ContactMe';
// import {Routes, Route} from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";

import Projects from './Components/Projects/Projects.jsx';

function App() {

  return (
    <div id="App">

      <AnimatedCursor color="255,255,255" />
      <ResponsiveAppBar />
      <Home />
      <About />

      <Projects />




      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element="" />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
      </Routes> */}
      {/* <Route path='Projects' element={<Projects />} /> */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;