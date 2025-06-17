import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="p-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">Oluyole Kehinde</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.section}`}
                className="cursor-pointer  hover:text-white transition-all duration-500"
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center text-lightBrown text-sm mt-4">
        <p>© 2025 Oluyole Kehinde.</p>
      </div>
    </div>
  );
};

export default FooterMain;
