"use client";
import { AboutDataType, TargetElement } from "@/types/type";
import React from "react";
import { useSectionData } from "@/hooks/data/useSectionData";
import Image from "next/image";
import HtmlContent from "@/components/Layout-components/HtmlContent";

function About() {
  const { data: aboutSection } = useSectionData("about");

  const aboutData: AboutDataType | null = aboutSection
    ? {
      description: aboutSection.description,
      heading: aboutSection.heading,
      wysiwygEditor: aboutSection.wysiwygEditor,
      images: {
        id: aboutSection.images.id,
        url: aboutSection.images.url,
      },
    }
    : null;

  const htmlString = `${aboutData?.wysiwygEditor.html}`;

  const targets: TargetElement[] = [
    { tag: "p", className: "text-lg font-normal" },
  ];

  return (
    <div className={"py-16 px-4 bg-base-300 space-y-5"}>
      <h2
        className={
          "mb-10 text-primary-content text-center font-regular text-5xl font-playfair"
        }
      >
        {aboutData && aboutData.heading}
      </h2>
      <div className="flex flex-col justify-center items-center min-w-full min-h-fit py-5 px-5">
        <div className="w-full h-full">
          {aboutData && (
            <div className="desktop:grid desktop:grid-cols-2 flex flex-col gap-5 desktop:gap-4">
              <div className="desktop:w-8/12 w-full mx-auto">
                <Image
                  src={aboutData.images.url}
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  className="w-full h-full rounded-lg object-cover"
                  alt="image data"
                />
              </div>
              <div className="desktop:w-5/6">
                <div className="flex flex-col justify-center items-center gap-8">
                  <HtmlContent html={htmlString} targets={targets} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
