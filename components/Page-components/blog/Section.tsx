"use client";
import React, { Fragment } from "react";
import PostDetail from "./Section-components/PostDetail";
import { useLanguage } from "@/hooks/useLanguage";

export default function Section({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { language } = useLanguage();
  return (
    <Fragment>
      <PostDetail params={params} language={language} />
    </Fragment>
  );
}
