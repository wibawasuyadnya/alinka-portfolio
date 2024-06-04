// components/HtmlContent.tsx

import React from "react";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
} from "html-react-parser";

interface HtmlContentProps {
  html: string;
}

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if ((domNode as Element).name === "a") {
      const { attribs, children } = domNode as Element;
      return (
        <a
          href={attribs.href}
          className=" px-5 py-3 text-base bg-primary text-white rounded-xl" // Apply your custom class
          target="_blank"
          rel="noopener noreferrer"
        >
          {domToReact(children as DOMNode[], options)}
        </a>
      );
    }
    if ((domNode as Element).name === "em") {
      const { children } = domNode as Element;
      return (
        <em className="text-3xl font-medium">
          {domToReact(children as DOMNode[], options)}
        </em>
      );
    }
    if ((domNode as Element).name === "strong") {
        const { children } = domNode as Element;
        return (
          <em className="text-2xl font-semibold">
            {domToReact(children as DOMNode[], options)}
          </em>
        );
      }
  },
};

const HtmlContent = ({ html }: HtmlContentProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {parse(html, options)}
    </div>
  );
};

export default HtmlContent;
