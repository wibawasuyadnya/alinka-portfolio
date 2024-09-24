"use client";
import React from "react";
import Slider from "@/components/Layout-components/Slider/Slider";
import { DefaultPageDataType, SliderListType } from "@/types/type";
import Image from "next/image";
import Typewriter from "@/components/Layout-components/Typewriter";
import { useSliderData } from "@/hooks/data/useSliderData";

export default function HeroBanner({
  content,
}: {
  content: DefaultPageDataType | null;
}) {
  const { data: sliderData, error } = useSliderData();
  if (error) {
    return null;
  }
  return (
    <div className="relative">
      {sliderData && <Slider data={sliderData} />}
      <div className="text-base-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5] desktop:z-10 font-playfair tracking-wide h-fit desktop:w-2/5 w-10/12">
        <div className="relative">
          <div className="space-y-4 text-center backdrop-opacity-20 backdrop-blur backdrop-invert bg-base-100/30 p-4 rounded">
            <h1 className="text-2xl desktop:text-5xl font-bold">{content?.heading}</h1>
            <div>
              <Typewriter data={content?.description} delay={1} />
            </div>
          </div>
          <Image
            className="absolute top-[-25px] right-[-30px] xs:hidden"
            src={"/assets/images/wax_holder.png"}
            width={80}
            height={80}
            alt={"wax holder"}
          />
        </div>
      </div>
    </div>
  );
}
