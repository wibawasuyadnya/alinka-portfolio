"use client";
import Masonry from "react-masonry-css";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import { PostsListType } from "@/types/type";
import { Origami } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface PostsListPropsType {
  data: PostsListType | null;
  length?: number;
}

export default function PostsList({ data, length }: PostsListPropsType) {
  const router = useRouter();
  const { language } = useLanguage();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (!data) return null;

  const postsToDisplay = length ? data.slice(0, length) : data;

  console.log(language);

  return data && data.length > 0 ? (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {postsToDisplay.map((post) => {
          return (
            <div key={post.id} className="masonry-item">
              <div>{post.title}</div>
              <div>{post.publishedAt}</div>
            </div>
          );
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
