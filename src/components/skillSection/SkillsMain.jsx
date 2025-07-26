import React from "react";
import SKillsText from "./SKillsText";
import AllSkills from "./AllSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";

const SkillsMain = () => {
  return (
    <div id="skills">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <SKillsText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col items-center justify-center mt-10"
      >
        <AllSkills />
      </motion.div>
    </div>
  );
};

export default SkillsMain;
