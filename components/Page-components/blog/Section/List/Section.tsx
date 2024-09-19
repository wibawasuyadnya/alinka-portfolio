"use client";
import React from "react";
import PostsList from "../../PostList";
import { useLanguage } from "@/hooks/useLanguage";
import { usePostsData } from "@/hooks/data/usePostsData";

export default function Section() {
  const { language } = useLanguage();
  const { data: posts } = usePostsData({ language });

  return (
    <div className="w-full h-screen">
      <div className="py-16 px-10 mt-52">
        <PostsList data={posts} />
      </div>
    </div>
  );
}
