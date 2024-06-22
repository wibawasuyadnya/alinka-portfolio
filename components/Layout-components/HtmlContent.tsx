// components/HtmlContent.tsx
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import useStyledHtmlParser from "@/hooks/useStyledHtmlParser";
import { TargetElement } from "@/types/type";

interface HtmlContentProps {
  html: string;
  attribute?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  targets: TargetElement[];
}

const HtmlContent = ({ html, targets, attribute }: HtmlContentProps) => {
  const content = useStyledHtmlParser(html, targets);
  return <div {...attribute}>{content}</div>;
};

export default HtmlContent;
