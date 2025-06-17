import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button className="py-2 px-4 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-orange to-cyan hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      Hire me <LuArrowDownRight />
    </button>
  );
}

export default NavbarBtn;
