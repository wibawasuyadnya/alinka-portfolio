"use client";
import Masonry from "react-masonry-css";
import React, { Fragment } from "react";
import { PostsListType } from "@/types/type";
import { Origami } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import PostCard from "./PostList-Components/PostCard";

interface PostsListPropsType {
  data: PostsListType | null;
  length?: number;
  search?: string;
}

export default function PostsList({ data, length, search }: PostsListPropsType) {
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
        columnClassName="my-masonry-grid_column space-y-5"
      >
        {postsToDisplay.map((post) => { 
          return <PostCard key={post.id} data={post} />;
        })}
      </Masonry>
    </div>
  ) : (
    <div className="gap-5 min-h-[300px] w-full flex flex-col justify-center items-center">
      <Origami className=" w-2/4 desktop:w-1/5 h-full stroke-primary" />
      <div
        dangerouslySetInnerHTML={{
          __html: `<h4 class="font-regular text-xl text-center text-primary-content">
            ${language === "en"
              ? search
                ? `Oops, your search for "<b>${search}</b>" couldn't be found.`
                : `Oops, You need to start adding posts, currently there's no posts to show here...`
              : search
                ? `Uups, pencarian dari "<b>${search}</b>" tidak dapat ditemukan.`
                : `Uups, Anda harus mulai menambahkan postingan, saat ini tidak ada postingan yang bisa ditampilkan di sini...`}

          </h4>`
        }} />
    </div>
  );
}
