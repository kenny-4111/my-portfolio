import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMePic from "./AboutMePic";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-evenly items-center"
    >
      <div className="md:flex-1">
        <AboutMeText />
      </div>
      <div className="md:flex-1 md:pl-40">
        <AboutMePic />
      </div>
    </div>
  );
};

export default AboutMeMain;
