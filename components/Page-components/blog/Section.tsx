"use client";
import React, { Fragment } from "react";
import PostDetail from "./Section-Components/PostDetail";
import { useLanguage } from "@/hooks/useLanguage";
import PostsList from "./Section-Components/PostList";
import { usePostsData } from "@/hooks/data/usePostsData";
import Hero from "./Section-Components/Hero";
import { useAppSelector } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";

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
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const tags = useAppSelector((state) => state.global.tags);
  const { data: posts } = usePostsData({ language, search, tags });

  const GetSectionType = ({ type }: { type: string }) => {
    if (type === "detail") {
      return <PostDetail params={params} language={language} />;
    }
    if (type === "list") {
      if (!posts) {
        return <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-base-100 w-full h-screen">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <PreloadAnimation extraLarge={true} />
          </div>
        </div>
      }
      return (
        <div className="w-full h-full">
          <Hero language={language} selectedTags={tags} search={search} />
          <div className="px-10 pt-5 pb-20">
            <PostsList data={posts} search={search} />
          </div>
        </div>
      );
    }
    return null;
  };

  return <GetSectionType type={type} />;
}
