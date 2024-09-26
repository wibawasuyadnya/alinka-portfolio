import { DynamicHeaderType } from "@/types/type";
import React, { Fragment, MouseEvent } from "react";
import StaticHeader from "./DynamicHeader-components/StaticHeader";
import StickyHeader from "./DynamicHeader-components/StickyHeader";
import BottomNavigationBar from "./BottomNavigation";

export default function DynamicHeader({
  show,
  navbar,
  onClick,
  type,
}: DynamicHeaderType) {
  return (
    <Fragment>
      <StickyHeader type={type} show={show} onClick={onClick} navbar={navbar} />
      <StaticHeader type={type} onClick={onClick} navbar={navbar} />
      <div className="block desktop:hidden">
        <BottomNavigationBar />
      </div>
    </Fragment>
  );
}
