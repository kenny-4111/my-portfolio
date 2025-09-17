import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center ">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl text-orange">
        FRONT-END WEB DEVELOPER
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.0rem] lg:text-6xl sm:4xl font-bold font-special text-cyan">
        OLUYOLE KEHINDE
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white">
        A Tech savy, Development nerd. hungry to pick up new challenges
      </motion.p>
    </div>
  );
};

export default HeroText;
