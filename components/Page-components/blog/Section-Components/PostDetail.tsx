"use client";
import Image from "next/image";
import { Fragment } from "react";
import { Language } from "@/types/enum";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import { List, CalendarDays } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePostsData } from "@/hooks/data/usePostsData";
import Breadcrumb from "@/components/Layout-components/Breadcrumb";
import { usePostDetailData } from "@/hooks/data/usePostDetailData";

interface Props {
  params?: {
    slug: string | undefined;
  };
  language: Language;
}

function PostDetail({ params, language }: Props) {
  const slug = params?.slug;
  const router = useRouter();
  const { markdownToHtml } = require("ts-markdown-parser");
  const { data: post } = usePostDetailData({ slug, language });
  const { data: posts } = usePostsData({ language });

  if (!post || !posts || !slug) {
    return "";
  }

  const markdownContent = markdownToHtml(post.content);

  const hasMultiplePosts = posts.length > 1;

  const getNextPostSlug = () => {
    const currentIndex = posts.findIndex((p) => p.slug === slug);
    return hasMultiplePosts
      ? posts[(currentIndex + 1) % posts.length].slug
      : language !== "id"
        ? "No Next Post"
        : "Tidak Terdapat Post Berikutnya";
  };

  const getPreviousPostSlug = () => {
    const currentIndex = posts.findIndex((p) => p.slug === slug);
    return hasMultiplePosts
      ? posts[(currentIndex - 1 + posts.length) % posts.length].slug
      : language !== "id"
        ? "No Previous Post"
        : "Tidak Terdapat Post Sebelumnya";
  };

  const nextPostSlug = getNextPostSlug();
  const previousPostSlug = getPreviousPostSlug();

  return (
    <div className="w-full h-full pb-[50px]">
      <div
        className={"h-[350px] desktop:h-[400px] w-full bg-cover bg-no-repeat bg-center bg-fixed bg-blend-overlay"}
        style={{
          backgroundImage: `url(${post.coverImage.url})`,
        }}
      />
      <div className="w-full h-fit relative px-3 desktop:px-72 space-y-4">
        <div className="flex desktop:flex-row desktop:justify-start desktop:items-center gap-3 desktop:gap-4 w-fit">
          {post.authors?.map((author, idx) => {
            return (
              <Fragment key={idx}>
                <div className="avatar mt-[-50px] w-full">
                  <div className="bg-neutral w-24 rounded-full border-[4px] border-solid border-primary">
                    <Image src={author.picture.url} width={0} height={0} alt={`${author.name} Picture`} sizes="100vw" />
                  </div>
                </div>
                <div className="pt-2 space-y-1 w-full">
                  <div className="flex flex-row -start items-center gap-1">
                    <h5 className="text-sm font-semibold capitalize">
                      {author.name}
                    </h5>
                    <div
                      className={`h-2 w-2 ${post.createdBy?.isActive
                        ? "bg-green-500"
                        : "bg-slate-500"
                        } rounded-full`}
                    ></div>
                  </div>
                  <h6
                    data-tip={author.intro}
                    className="desktop:tooltip desktop:tooltip-right text-xs font-light"
                  >
                    {author.bio}
                  </h6>
                </div>
              </Fragment>
            );
          })}
        </div>
        <Breadcrumb
          capitalizeLinks
          homeElement={"Home"}
          separator={<span> {">"} </span>}
          activeClasses="font-semibold tracking-wide"
          containerClasses="flex gap-2 flex-row flex-wrap"
          listClasses="text-base hover:underline m-0 font-normal"
        />
        <div>
          <h1 className="text-3xl  font-playfair font-bold">{post.title}</h1>
        </div>
        <table className="table desktop:w-1/3">
          <tbody>
            <tr className="border-none">
              <td className="px-0">
                <div className="flex flex-row justify-start items-center gap-2">
                  <List className="stroke-primary w-5 h-5" />
                  <h3 className="text-sm font-normal">Tags : </h3>
                </div>
              </td>
              <td>
                {post.tags.map((tag, idx) => {
                  return (
                    <div
                      className={"py-2 px-3 w-fit h-fit rounded-md bg-primary"}
                      key={idx}
                    >
                      <p
                        className={"text-sm font-normal text-white capitalize"}
                      >
                        {tag}
                      </p>
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr className="border-none">
              <td className="px-0">
                <div className="flex flex-row justify-start items-center gap-2">
                  <CalendarDays className="stroke-primary w-5 h-5" />
                  <h3 className="text-sm font-normal">Published on : </h3>
                </div>
              </td>
              <td>
                {formatDate(post.publishedAt, {
                  format: "DD-Month-YYYY",
                  separator: " ",
                })}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="divider"></div>

        <div
          dangerouslySetInnerHTML={{
            __html: `${markdownContent}`,
          }}
        />

        <div className="divider"></div>

        <div className="flex py-10 flex-row justify-between items-center">
          <div
            onClick={() => {
              hasMultiplePosts ?? router.push(`/blog/${previousPostSlug}`);
            }}
            className={`${hasMultiplePosts ? "opacity-100" : "opacity-50"
              } cursor-pointer flex flex-row justify-start items-center gap-2`}
          >
            <ArrowLeft />
            <h5>{previousPostSlug}</h5>
          </div>
          <div
            onClick={() => {
              hasMultiplePosts ?? router.push(`/blog/${nextPostSlug}`);
            }}
            className={`${hasMultiplePosts ? "opacity-100" : "opacity-50"
              } cursor-pointer flex flex-row justify-start items-center gap-2`}
          >
            <h5>{nextPostSlug}</h5>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
