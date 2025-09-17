import { link } from "motion/react-client";
import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="py-2 px-4 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-cyan hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
      onClick={handleClick}>
      Hire me <LuArrowDownRight />
    </button>
  );
}

export default NavbarBtn;
