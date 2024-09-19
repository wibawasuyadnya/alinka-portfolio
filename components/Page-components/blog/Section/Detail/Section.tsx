"use client";
import React, { Fragment } from "react";
import PostDetail from "../../PostDetail";
import { useLanguage } from "@/hooks/useLanguage";

export default function Section({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { language } = useLanguage();
  return <PostDetail params={params} language={language} />;
}
