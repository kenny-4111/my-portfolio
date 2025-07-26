import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../tempMotion/Variant";

const ExperienceText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center mt-[100px]"
    >
      <h2 className="text-6xl text-cyan mb-10">Experience</h2>
    </motion.div>
  );
};

export default ExperienceText;
