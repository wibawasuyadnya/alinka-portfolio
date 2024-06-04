import React, { Fragment } from "react";
import Hero from "./Hero/Hero";
import Quotation from "./Quotation/Quote";

export default function Section() {
  return (
    <Fragment>
      {/* Hero Section */}
      <Hero />
      <Quotation />
    </Fragment>
  );
}
