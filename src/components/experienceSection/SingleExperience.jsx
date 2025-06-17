import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/Variant";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[470px] md:w-[240px] sm:h-auto sm:w-auto border-2 border-orange border-dashed rounded-2xl mt-12 p-4 sm:flex-none"
    >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc list-inside text-white mt-4">
        {experience.responsibility.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
