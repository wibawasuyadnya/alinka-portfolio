"use client";
import { notFound } from "next/navigation";
import { Language } from "@/types/enum";
import { PostsListType } from "@/types/type";
import { usePostDetailData } from "@/hooks/data/usePostDetailData";
import { usePostsData } from "@/hooks/data/usePostsData";

interface Props {
  params: {
    id: string;
  };
  language: Language;
}

function PostDetail({ params, language }: Props) {
  const { id } = params;
  const { data: post } = usePostDetailData({ id, language });
  const { data: posts } = usePostsData({ language });

  if (!post || !posts) {
    return "";
  }

  const getNextPostId = () => {
    const currentIndex = posts.findIndex((post) => post.id === id);
    return posts[(currentIndex + 1) % posts.length].id;
  };

  const getPreviousPostId = () => {
    const currentIndex = posts.findIndex((post) => post.id === id);
    return posts[(currentIndex - 1 + posts.length) % posts.length].id;
  };

  const nextArtId = getNextPostId();
  const previousArtId = getPreviousPostId();

  return <div className="">test</div>;
}

export default PostDetail;
