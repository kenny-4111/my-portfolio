import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        since 2025
      </p>
      <div className="flex items-center justify-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5" text="Websites" />
      </div>
      <p className="text-center text-white text-lg">
        With 1 year of experience building dynamic web and mobile applications
      </p>
      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
