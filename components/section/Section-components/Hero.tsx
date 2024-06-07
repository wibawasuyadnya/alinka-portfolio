"use client";
import React from "react";
import HeroBanner from "./Hero-components/HeroBanner";
import { DefaultPageDataType } from "@/types/type";
import { useSectionContent } from "@/hooks/useSectionContent";

function Hero() {
  const heroSection = useSectionContent("hero");

  const heroData: DefaultPageDataType | null = heroSection
    ? {
        description: heroSection.description,
        heading: heroSection.heading,
      }
    : null;
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[400px]">
      <div className="w-full h-full">
        <HeroBanner content={heroData} />
      </div>
    </div>
  );
}

export default Hero;
