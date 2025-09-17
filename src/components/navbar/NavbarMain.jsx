import React, { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { Menu, X } from "lucide-react";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1300px] mx-auto mt-4 px-4 w-[95%] fixed top-0 left-1/2 -translate-x-1/2  bg-black rounded-full  border-cyan border-[0.5px] z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile links */}
      {menuOpen && (
        <div className="fixed top-[76px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1300px] bg-darkCyan rounded-b-xl border-orange border-[0.5px] border-t-0 p-4 lg:hidden transition-all duration-500 ease-in-out">
          <NavbarLinks isMobile={true} onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* End of Mobile links */}
    </nav>
  );
}

export default NavbarMain;
