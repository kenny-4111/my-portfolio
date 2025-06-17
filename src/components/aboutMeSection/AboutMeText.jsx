import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/Variant";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col md:items-start items-center md:text-left text-center overflow-hidden "
    >
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Kehinde, a web developer with a passion for coding. I specialize in
        React and front-end development. For me development is an adventure,
        bringing ideas into reality that provides solution to humans needs.
        Outside of coding, I enjoy continuous learning and sharing knowledge to
        inspire others to achieve their goals.
      </p>
      <Link to="projects" spy={true} smooth={true} duration={500} offset={-130}>
        <button className="border border-orange rounded-full py-2 px-4 text-lg mt-10 hover:bg-darkOrange transition-all duration-500 cursor-pointer md:self-start text-white hover:text-cyan">
          My Projects
        </button>
      </Link>
    </motion.div>
  );
};

export default AboutMeText;
