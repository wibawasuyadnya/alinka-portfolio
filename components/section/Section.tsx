"use client";
import React, { Fragment, useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import { useSectionContent } from "@/hooks/useSectionContent";
import { HeroDataType } from "@/types/type";

export default function Section() {
  const heroSection = useSectionContent("hero");

  const heroData: HeroDataType | null = heroSection
    ? {
        description: heroSection.description,
        heading: heroSection.heading,
      }
    : null;

  return (
    <Fragment>
      {/* Hero Section */}
      <Hero data={heroData} />
    </Fragment>
  );
}
