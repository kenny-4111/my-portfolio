import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRIght from "./ExperienceTopRIght";

const ExperienceTop = () => {
  return (
    <div className="md:flex gap-4 items-center justify-center ">
      <div>
        <ExperienceTopLeft />
      </div>
      <div>
        <ExperienceTopMiddle />
      </div>
      <div>
        <ExperienceTopRIght />
      </div>
    </div>
  );
};

export default ExperienceTop;
