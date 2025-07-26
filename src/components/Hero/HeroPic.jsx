import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";

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
        className="max-h-[300px] max-w-[300px]  h-full w-full rounded-full  object-contain" // Adjusted to fit the design
      />
    </motion.div>
  );
};

export default HeroPic;
