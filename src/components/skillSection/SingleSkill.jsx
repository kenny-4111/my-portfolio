import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    // Outer container for the entire skill item (including the orange background)
    // This div will now manage its own height and width, and relative positioning.
    <div
      className="
      relative                           // Establish positioning context for children
      flex flex-col items-center         // Center content horizontally
      py-6 px-2                          // Add some vertical padding for content
      rounded-[3rem]                     // Rounded corners for the entire skill  (adjust as needed)
      overflow-hidden                    // Crucial: Hides anything outside this 
      hover:-translate-y-4 transition-transform duration-300 ease-in-out // Subtle hover effect
      w-[160px]                          // Default width for the whole skill on smaller screens (adjust this!)
      sm:w-[180px]                       // Slightly larger on small screens
      md:w-[200px]                       // Larger on medium screens
      lg:w-[220px]                       // Even larger on large screens
      text-center                        // Center text
      pb-8                               // Add padding-bottom to ensure text isn't cut off if rectangle is behind
    "
    >
      {/* Orange Background - positioned absolutely to fill the entire block */}
      <div className="absolute inset-0 bg-orange -z-10 hidden md:block"></div>
      {/* inset-0 makes it fill the parent */}
      {/* Icon Circle (always on top) */}
      <div
        className="
        relative z-10                    // Position  and high z-index to be above orange background
        bg-white text-cyan
        h-[100px] w-[100px]              // Fixed size for the circle itself
        flex items-center justify-center
        rounded-full border-4 border-orange
        text-6xl
        mb-4                             // Margin below icon
        hover:text-darkGrey hover:scale-105 transform transition-all duration-300
        
      "
      >
        {imgSvg}
      </div>
      {/* Skill Name Text */}
      <p className="text-white font-bold relative z-10 text-lg">{text}</p>{" "}
      {/* text-lg for better readability */}
    </div>
  );
};

export default SingleSkill;
