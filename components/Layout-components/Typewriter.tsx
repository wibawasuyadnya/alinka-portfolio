import React, { Fragment } from "react";
import CursorBlinker from "./Typewriter-components/CursorBlinker";
import AnimationText from "./Typewriter-components/AnimationText";

interface TypewriterProps {
  delay: number;
  data?: string;
}

function Typewriter({ data, delay }: TypewriterProps) {
  return (
    <Fragment>
      <AnimationText data={data} delay={delay + 1} />
      <CursorBlinker />
    </Fragment>
  );
}

export default Typewriter;
