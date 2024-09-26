import React, { Fragment } from "react";
import { PostType } from "@/types/type";
import { formatDate } from "@/utils/formatDate";
import { shortenStr } from "@/utils/shortenString";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";

interface PostCardProps {
  data: PostType;
}

function PostCard({ data }: PostCardProps) {
  const { markdownToHtml } = require("ts-markdown-parser");
  const { language } = useLanguage();
  const markdownContent = markdownToHtml(data.content);
  return (
    <div 
      className={
        " p-4 rounded-lg w-full border border-solid border-base hover:border-primary hover:shadow-base hover:shadow-[0px_0px_20px_1px_rgba(0,0,0,0.08)]"
      }
    >
      <a href={`/blog/${data.slug}`}>
        <div className="space-y-3 w-full">
          <div className="flex flex-col desktop:flex-row gap-3 w-full">
            <Image
              className={ 
                "w-full desktop:w-[150px] h-full rounded-lg border border-solid border-primary"
              }
              src={data.coverImage.url}
              alt={`Cover Image`}
              width={0}
              height={0}
              sizes="100vw"
            />
            <h3 className={"text-2xl font-playfair w-full"}>{data.title}</h3>
          </div>
          <div className="flex flex-col desktop:flex-row justify-center desktop:justify-start item-start desktop:items-center gap-2">
            {data.authors?.map((author, idx) => {
              return (
                <Fragment key={idx}>
                  <h5 className="capitalize font-normal text-sm">
                    {language !== "id" ? "Published on: " : "Diposting : "}
                    {formatDate(data.publishedAt, {
                      format: "DD-Month-YYYY",
                      separator: "/",
                    })}
                    ,
                  </h5>
                  <h5 className="font-normal text-sm capitalize">
                    {language !== "id" ? "by " : "oleh "} <b>{author.name}</b>
                  </h5>
                </Fragment>
              );
            })}
          </div>
          <div
            className={"text-sm font-normal"}
            dangerouslySetInnerHTML={{
              __html: `${shortenStr({
                text: markdownContent,
                startLength: 0,
                displayLength: 40,
              })}`,
            }}
          />
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
