import React from "react";
import { DefaultPageDataType } from "@/types/type";
import { useSectionData } from "@/hooks/data/useSectionData";
import { usePostsData } from "@/hooks/data/usePostsData";
import { useLanguage } from "@/hooks/useLanguage";

export default async function Post() {
  const { language } = useLanguage();
  const { data: posts } = await usePostsData(language);
  const { data: postSection } = useSectionData("post");

  console.log(posts)

  const postData: DefaultPageDataType | null = postSection
    ? { description: postSection.description, heading: postSection.heading }
    : null;

  return (
    <div className={"py-16 px-10 bg-base-100 space-y-5"}>
      <h2
        className={
          "mb-24 text-primary-content text-center font-regular text-5xl font-playfair"
        }
      >
        {postData && postData.heading}
      </h2>
    </div>
  );
}
