import React from "react";
import { PiHexagon } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/Variant";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center overflow-hidden"
    >
      {/* Ensure the parent is relative for absolute children */}
      <img
        src="../../images/486323137_2646778108851483_8241475416036198862_n.jpg"
        alt="OLUYOLE KEHINDE"
        className="max-h-[400px] max-w-[400px]  h-full w-full rounded-full  object-contain relative" // Adjusted to fit the design
      />
      <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center animate-pulse -z-20">
        <PiHexagon
          className="
            h-[calc(100vw*1.5)]      // Approximate height based on viewport width (e.g., 80vw)
            max-h-[550px]           // Max height to prevent it from getting too big on large screens
            w-auto                  // Maintain aspect ratio
            text-cyan               // Color
            blur-md                 // Blur effect
            animate-[spin_20s_linear_infinite] 
            
          "
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
