import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechStar</h1>
        <p>&copy; All Rights Reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target="blank">
            {" "}
            YouTube <AiFillYoutube />{" "}
          </a>
          <a href="https://instagram.com" target="blank">
            {" "}
            Instagram <AiFillInstagram />
          </a>
          <a href="https://github.com" target="blank">
            {" "}
            GitHub <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
