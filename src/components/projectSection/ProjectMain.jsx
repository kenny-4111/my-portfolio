import React from "react";
import ProjectText from "./ProjectText";
import ProjectSingle from "./ProjectSingle";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";

const Projects = [
  {
    id: "ednut",
    name: "Ednut",
    Year: "2025",
    align: "right",
    image: "../../images/ednut.png",
    link: "https://ednut.vercel.app/",
  },
  {
    id: "krea ai",
    name: "Krea ai",
    Year: "2025",
    align: "left",
    image: "../../images/cartolinks.png",
    link: "https://cartolinks-test-seven.vercel.app/",
  },
  {
    id: "NimbleAcad",
    name: "NimbleAcad",
    Year: "2025",
    align: "right",
    image: "../../images/image.png",
    link: "https://nimbleacademy.thenimblesgrp.com/",
  },
  {
    id: "Kenny",
    name: "P2S",
    Year: "2025",
    align: "left",
    image: "../../images/p2s.png",
    link: "#",
  },
];
const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>
        <ProjectText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {Projects.map((item, index) => (
          <ProjectSingle
            key={index}
            name={item.name}
            year={item.Year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;
