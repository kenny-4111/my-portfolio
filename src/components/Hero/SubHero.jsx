import React from "react";

const SubHero = () => {
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-6 items-center gap-4 lg:mt-10 md:mt-8 bg-brown overflow-hidden">
      <p className="hidden md:block">Fast Learner</p>
      <p className="hidden md:block">Team Work</p>
      <p>Details Master</p>
    </div>
  );
};

export default SubHero;
