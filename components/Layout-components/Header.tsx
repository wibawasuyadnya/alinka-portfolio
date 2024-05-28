"use client";
import Head from "next/head";
import React, { Fragment, useState } from "react";

interface HeaderType {
  title?: string;
  description?: string;
}

const StickyHeader = ({ show }: { show?: boolean }) => {
  return show && <div>show</div>;
};

export default function Header({ title, description }: HeaderType) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Fragment>
      <Head>
        <title>{title ? title : "Alinka Painter Portfolio"}</title>
        <meta
          name="description"
          content={
            description ? description : "Hai this is my personal portfolio"
          }
        />
        <link rel="icon" href="/app/favicon.ico" />
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
      </Head>
      <div>
        <StickyHeader show={show} />
      </div>
    </Fragment>
  );
}
