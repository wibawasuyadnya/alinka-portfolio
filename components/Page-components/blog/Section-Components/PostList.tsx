"use client";
import Masonry from "react-masonry-css";
import React from "react";
import { PostsListType } from "@/types/type";
import { Origami } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import PostCard from "./PostList-Components/PostCard";

interface PostsListPropsType {
  data: PostsListType | null;
  length?: number;
}

export default function PostsList({ data, length }: PostsListPropsType) {
  const { language } = useLanguage();
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (!data) return null;

  const postsToDisplay = length ? data.slice(0, length) : data;

  return data && data.length > 0 ? (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {postsToDisplay.map((post) => {
          return <PostCard key={post.id} data={post} />;
        })}
      </Masonry>
    </div>
  ) : (
    <div className="gap-5 min-h-[300px] w-full flex flex-col justify-center items-center">
      <Origami className="w-1/5 h-full stroke-primary" />
      <h4 className={"font-regular text-xl text-center text-primary-content"}>
        {language === "en"
          ? `Oops, You need to start adding post, currently there's no posts to show here...`
          : `Uups, Anda harus mulai menambahkan postingan, Saat ini tidak ada postingan yang bisa ditampilkan di sini...`}
      </h4>
    </div>
  );
}