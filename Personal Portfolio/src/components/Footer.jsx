import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Founder"
        />
        <h2>Aayush Kanholikar</h2>
        <p>Motivationanl Quote``</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com" target="blank">
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com" target="blank">
            <AiFillGithub />
          </a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
