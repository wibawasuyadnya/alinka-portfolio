"use client";
import React from "react";
import { useSectionContent } from "@/hooks/useSectionContent";
import { QuotationDataType, TargetElement } from "@/types/type";
import HtmlContent from "@/components/Layout-components/HtmlContent";

function Quotation() {
  const quoteSection = useSectionContent("quotation");

  const quoteData: QuotationDataType | null = quoteSection
    ? {
        description: quoteSection.description,
        heading: quoteSection.heading,
        wysiwygEditor: quoteSection.wysiwygEditor,
      }
    : null;

  const htmlString = `${quoteData?.wysiwygEditor.html}`;

  const targets: TargetElement[] = [
    { tag: "a", className: "px-5 py-3 text-base bg-primary text-white rounded-md z-10 font-sans cursor-pointer"},
    { tag: "em", className: "text-3xl font-normal"},
    { tag: "p", className: "text-2xl font-playfair" },
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-full h-fit pt-20 pb-20">
      {quoteData && <HtmlContent html={htmlString} targets={targets} />}
    </div>
  );
}

export default Quotation;
