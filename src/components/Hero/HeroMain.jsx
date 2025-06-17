import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";
import SubHero from "./SubHero";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 ">
      <div
        className="
        flex                     
        flex-col                
        md:flex-row             
        max-w-[1200px]          
        mx-auto                  
        justify-between         
        items-center            
                        
        px-4                     
        gap-8                    
      "
      >
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
      <SubHero />
    </div>
  );
};
export default HeroMain;
