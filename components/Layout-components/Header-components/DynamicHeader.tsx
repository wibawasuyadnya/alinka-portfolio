import { DynamicHeaderType } from "@/types/type";
import React, { Fragment, MouseEvent } from "react";
import StaticHeader from "./DynamicHeader-components/StaticHeader";
import StickyHeader from "./DynamicHeader-components/StickyHeader";

export default function DynamicHeader({
  show,
  navbar,
  onClick,
}: DynamicHeaderType) {
  return (
    <Fragment>
      <StickyHeader show={show} onClick={onClick} navbar={navbar} />
      <StaticHeader onClick={onClick} navbar={navbar} />
    </Fragment>
  );
}
