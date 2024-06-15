// hooks/useStyledHtmlParser.tsx
import React from "react";
import parse, { domToReact, HTMLReactParserOptions, Element, DOMNode } from "html-react-parser";
import { TargetElement } from "@/types/type";

const useStyledHtmlParser = (html: string, targets: TargetElement[]) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if ((domNode as Element).name) {
        const element = domNode as Element;
        const target = targets.find(t => t.tag === element.name);
        if (target) {
          const { children } = element;
          return React.createElement(
            target.tag,
            { className: target.className },
            domToReact(children as DOMNode[], options)
          );
        }
      }
    },
  };

  return parse(html, options);
};

export default useStyledHtmlParser;
