import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOPen, meunOpen }) => {
  return (
    <nav>
      <NavContent />
      <button onClick={() => setMenuOPen(!meunOpen)}>
        <AiOutlineMenu />
      </button>
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Aayush</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experiences</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:akanolikar@gmail.com">
      <button>Email Me</button>
    </a>
  </>
);

export default Header;
