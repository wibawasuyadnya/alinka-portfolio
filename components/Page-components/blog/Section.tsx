"use client";
import React, { Fragment } from "react";
import PostDetail from "./Section-Components/PostDetail";
import { useLanguage } from "@/hooks/useLanguage";
import PostsList from "./Section-Components/PostList";
import { usePostsData } from "@/hooks/data/usePostsData";
import Hero from "./Section-Components/Hero";

export default function Section({
  type,
  params,
}: {
  params?: {
    slug: string | undefined;
  };
  type: string;
}) {
  const { language } = useLanguage();
  const { data: posts } = usePostsData({ language });

  const GetSectionType = ({ type }: { type: string }) => {
    if (type === "detail") {
      return <PostDetail params={params} language={language} />;
    }
    if (type === "list") {
      return (
        <div className="w-full h-full">
          <Hero language={language} />
          <div className="px-10">
            <PostsList data={posts} />
          </div>
        </div>
      );
    }
    return null;
  };

  return <GetSectionType type={type} />;
}
