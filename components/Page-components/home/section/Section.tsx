import React, { Fragment } from "react";
import Hero from "./Section-components/Hero";
import Quotation from "./Section-components/Quote";
import About from "./Section-components/About";
import Gallery from "./Section-components/Gallery";
import Contact from "./Section-components/Contact";
import Post from "./Section-components/Post";

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
      <section id="latest-post">
        <Post />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Fragment>
  );
}
