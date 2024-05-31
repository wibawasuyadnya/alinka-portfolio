"use client";

import React, { Fragment, ReactNode } from "react";
import Header from "./Layout-components/Header";

interface LayoutType {
  children: ReactNode;
}
export default function Layout({ children }: LayoutType) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}
