import React from "react";
import HeroBanner from "./Hero-components/HeroBanner";
import { HeroDataType } from "@/types/type";

const Hero = ({ data }: { data: HeroDataType | null }) => {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[400px]">
      {/* Hero Section */}
      <div className="w-full h-full">
        <HeroBanner content={data}/>
      </div>
    </div>
  );
};

export default Hero;
