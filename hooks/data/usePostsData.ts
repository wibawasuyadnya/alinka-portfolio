"use client";
import { GET } from "@/app/api/_get/posts";
import { useAppDispatch } from "@/redux/hook";
import { Language } from "@/types/enum";
import { setLoading } from "@/redux/slices/globalSlice";
import { PostsListType } from "@/types/type";
import { useCallback, useEffect, useState } from "react";

export const usePostsData = ({
  language,
  search,
  tags,
}: {
  language: Language;
  search?: string;
  tags?: string;
}) => {
  const [data, setData] = useState<PostsListType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const getPostListData = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const res = await GET({ language, search, tags });
      setData(res.posts);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch gallery data");
    } finally {
      dispatch(setLoading(false));
    }
  }, [language, search, tags]);

  useEffect(() => {
    getPostListData(); 
  }, [language, search, tags]); 

  return { data, error };
};
