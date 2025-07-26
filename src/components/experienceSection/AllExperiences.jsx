import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";

const experiences = [
  {
    job: "software engineer",
    company: "NimbleDev",
    date: "2025 - present",
    responsibility: [
      "Developed and maintained web applications using React and Node.js",
      "Implementing reusable components and libraries for future use",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Ensured the performance, quality, and responsiveness of applications",
    ],
  },
  {
    job: "frontend developer",
    company: "NimbleDev",
    date: "2025 - present",
    responsibility: [
      "Designed and implemented user interfaces for web applications",
      "Worked closely with designers to create responsive and visually appealing layouts",
      "Optimized applications for maximum speed and scalability",
      "Participated in code reviews and maintained code quality standards",
    ],
  },
  {
    job: "full stack developer",
    company: "NimbleDev",
    date: "2025 - present",
    responsibility: [
      "Developed both client-side and server-side logic for web applications",
      "Integrated third-party APIs and services into applications",
      "Managed database systems and ensured data integrity",
      "Collaborated with team members to troubleshoot and resolve issues",
    ],
  },
];
const AllExperiences = () => {
  return (
    <div className="md:flex md:flex-row items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange md:block hidden" />
              </motion.div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
