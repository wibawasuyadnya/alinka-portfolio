"use client";
import React from "react";
import { useSectionContent } from "@/hooks/useSectionContent";
import { QuotationDataType } from "@/types/type";
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

  console.log(quoteData?.wysiwygEditor.html);

  return (
    <div className="flex flex-col justify-center items-center max-w-full min-h-[800px]">
      {/* Hero Section */}
      {quoteData && HtmlContent(quoteData.wysiwygEditor)}
    </div>
  );
}

export default Quotation;
