"use client";
import React from "react";
import { QuotationDataType, TargetElement } from "@/types/type";
import HtmlContent from "@/components/Layout-components/HtmlContent";
import { useSectionData } from "@/hooks/data/useSectionData";

function Quotation() {
  const { data: quoteSection } = useSectionData("quotation");

  const quoteData: QuotationDataType | null = quoteSection
    ? {
      description: quoteSection.description,
      heading: quoteSection.heading,
      wysiwygEditor: quoteSection.wysiwygEditor,
    }
    : null;

  const htmlString = `${quoteData?.wysiwygEditor.html}`;

  const targets: TargetElement[] = [
    {
      tag: "a",
      href: "#latest-post",
      className:
        "px-5 py-3 text-base bg-primary text-white rounded-md font-sans cursor-pointer",
    },
    { tag: "em", className: "desktop:text-3xl text-2xl font-normal w-[300px] desktop:w-full text-center" },
    { tag: "p", className: "desktop:text-2xl text-xl font-playfair flex flex-col justify-center items-center desktop:block" },
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-full h-fit pt-20 pb-20">
      {quoteData && (
        <HtmlContent
          attribute={{
            className: "flex flex-col justify-center items-center gap-8",
          }}
          html={htmlString}
          targets={targets}
        />
      )}
    </div>
  );
}

export default Quotation;
