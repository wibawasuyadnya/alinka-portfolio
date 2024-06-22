import ErrorNotFound from "@/components/Layout-components/Error-components/ErrorNotFound";
import Header from "@/components/Layout-components/Header";
import React, { Fragment } from "react";

export default function NotFound() {
  return (
    <Fragment>
      <Header />
      <ErrorNotFound />
    </Fragment>
  );
}
