import React from "react";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl text-cyan font-bold ">{number}</h3>
      <p className="text-lg text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
