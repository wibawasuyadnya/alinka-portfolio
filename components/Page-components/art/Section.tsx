import React, { Fragment } from "react";
import ArtIDetail from "./Section-components/ImageDetail";

export default function Section({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <Fragment>
      <ArtIDetail params={params} />
    </Fragment>
  );
}
