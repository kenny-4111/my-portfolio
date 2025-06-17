import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks({ isMobile = false, onLinkClick }) {
  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-center gap-4 text-white px-6 py-4 font-bold bg-darkCyan"
          : "hidden lg:flex flex-row gap-6 text-white font-body text-md items-center"
      }`}
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer hover:text-cyan transition-all duration-500"
            onClick={onLinkClick}
          >
            {link.link}
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;
