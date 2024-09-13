"use client";
import Masonry from "react-masonry-css";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import { PostsListType } from "@/types/type";

export default function PostsList({ data }: { data: PostsListType | null }) {
  const router = useRouter();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    data &&
    data.length >= 0 && (
      <Fragment>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((post) => {
            return (
              <div key={post.id} className="masonry-item">
                <div>{post.title}</div>
                <div>{post.publishedAt}</div>
              </div>
            );
          })}
        </Masonry>
      </Fragment>
    )
  );
}
