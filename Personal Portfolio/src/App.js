import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const[menuOpen,setMenuOPen] = useState(false)
  console.log(menuOpen);
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOPen={setMenuOPen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      
      <Toaster />
    </>
  );
};

export default App;
