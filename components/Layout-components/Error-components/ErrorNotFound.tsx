"use client";
import React from "react";
import { useSectionData } from "@/hooks/data/useSectionData";
import { NotFoundDataType, TargetElement } from "@/types/type";
import HtmlContent from "../HtmlContent";
import { useRouter } from "next/navigation";

export default function ErrorNotFound() {
  const router = useRouter();
  const { data: notFoundSection } = useSectionData("notfound");

  const notFoundData: NotFoundDataType | null = notFoundSection
    ? {
        heading: notFoundSection.heading,
        description: notFoundSection.description,
        wysiwygEditor: notFoundSection.wysiwygEditor,
        images: {
          id: notFoundSection.images.id,
          url: notFoundSection.images.url,
        },
      }
    : null;

  const htmlString = `${notFoundData?.wysiwygEditor.html}`;

  const imageBackground = `${notFoundData?.images.url}`;

  const targets: TargetElement[] = [
    { tag: "a", className: "px-5 py-3 text-base bg-primary text-white rounded-md font-sans cursor-pointer"},
    { tag: "h1", className: "text-9xl font-bold text-center"},
    { tag: "h2", className: "text-5xl font-semibold font-playfair text-center"},
    { tag: "h6", className: "text-2xl font-normal text-center"},
  ];

  return (
    <div className={`relative min-h-screen`}>
      <div
        style={{
          backgroundImage: `url('${imageBackground}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="text-base-200 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wide h-fit w-fit z-10">
          {notFoundData && (
            <HtmlContent
              attribute={{
                className: "flex flex-col justify-center items-center gap-8",
                onClick: () => router.push('/')
              }}
              html={htmlString}
              targets={targets}
            />
          )}
        </div>
      </div>
    </div>
  );
}
