import React, { Fragment } from "react";
import Hero from "./Section-components/Hero";
import Quotation from "./Section-components/Quote";
import About from "./Section-components/About";

export default function Section() {
  return (
    <Fragment>
      <Hero />
      <Quotation />
      <About />
    </Fragment>
  );
}
