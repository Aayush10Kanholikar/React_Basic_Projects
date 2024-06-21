import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assests/logo.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationClientCOunt = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationprojectCOunt = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Aayush Kanholikar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Desginer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typrwriterpara",
            }}
          />

          <div>
            <a href="mailto:akanolikar@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientCOunt}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +<motion.span ref={projectCount} whileInView={animationprojectCOunt}></motion.span>
              </p>
              <span>Projects Done </span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>akanolikar@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Aayush" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
