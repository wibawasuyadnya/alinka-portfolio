import { PostType } from "@/types/type";
import { shortenStr } from "@/utils/shortenString";
import React, { Fragment } from "react";

interface PostCardProps {
  data: PostType;
}

function PostCard({ data }: PostCardProps) {
  return (
    <div
      className={
        " p-4 rounded-lg w-full border border-solid border-base hover:shadow-base hover:shadow-[0px_0px_20px_1px_rgba(0,0,0,0.08)]"
      }
    >
      <a href={`/blog/${data.id}`} target="_blank">
        <div className="space-y-3 w-full">
          <div className="flex flex-row gap-3 w-full">
            <img
              className={
                "w-[150px] h-full rounded-lg border border-solid border-primary"
              }
              src={data.coverImage.url}
            />
            <h3 className={"text-2xl font-playfair w-full"}>{data.title}</h3>
          </div>
          <p className={"text-sm font-normal"}>
            {shortenStr({
              text: data.content,
              startLength: 73,
              displayLength: 30, 
            })}
          </p>
          {data.tags.length > 0 && (
            <div className="flex flex-row gap-2 justify-start items-center">
              <h4 className={"text-base font-normal"}>tags:</h4>
              {data.tags.map((tag, idx) => {
                return (
                  <div className={"py-2 px-3 rounded-md bg-primary"} key={idx}>
                    <p className={"text-sm font-normal text-white"}>{tag}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default PostCard;
