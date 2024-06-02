import React, { Fragment } from "react";
import HeroBanner from "./Hero-components/HeroBanner";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[400px]">
      {/* Hero Section */}
      <div className="w-full h-full">
        <HeroBanner />
      </div>
    </div>
  );
}
