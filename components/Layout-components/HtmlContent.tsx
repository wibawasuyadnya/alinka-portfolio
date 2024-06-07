// components/HtmlContent.tsx
import React, { ReactNode } from "react";
import useStyledHtmlParser from "@/hooks/useStyledHtmlParser";
import { TargetElement } from "@/types/type";

interface HtmlContentProps {
  html: string;
  targets: TargetElement[];
}

const HtmlContent = ({ html, targets }: HtmlContentProps) => {
  const content = useStyledHtmlParser(html, targets);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {content}
    </div>
  );
};

export default HtmlContent;
