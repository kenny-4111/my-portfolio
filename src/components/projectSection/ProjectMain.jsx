import React from "react";
import ProjectText from "./ProjectText";
import ProjectSingle from "./ProjectSingle";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/Variant";

const Projects = [
  {
    id: "p2s",
    name: "P2S",
    Year: "2025",
    align: "right",
    image: "../../images/website-img-1.jpg",
    link: "#",
  },
  {
    id: "milestone",
    name: "Milestone",
    Year: "2025",
    align: "left",
    image: "../../images/website-img-2.webp",
    link: "#",
  },
  {
    id: "clepto",
    name: "clepto",
    Year: "2025",
    align: "right",
    image: "../../images/website-img-3.jpg",
    link: "#",
  },
  {
    id: "Kenny",
    name: "P2S",
    Year: "2025",
    align: "left",
    image: "../../images/website-img-4.jpg",
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
        viewport={{ once: false, amount: 0.7 }}
      >
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
