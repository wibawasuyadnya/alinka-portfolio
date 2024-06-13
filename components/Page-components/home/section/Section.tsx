import React, { Fragment } from "react";
import Hero from "./Section-components/Hero";
import Quotation from "./Section-components/Quote";
import About from "./Section-components/About";
import Gallery from "./Section-components/Gallery";

export default function Section() {
  return (
    <Fragment>
      <Hero />
      <Quotation />
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </Fragment>
  );
}
