"use client";
import { GET } from "@/app/api/_get/postDetail";
import { useAppDispatch } from "@/redux/hook";
import { Language } from "@/types/enum";
import { setLoading } from "@/redux/slices/globalSlice";
import { PostType } from "@/types/type";
import { useCallback, useEffect, useState } from "react";

interface Props {
  slug: string;
  language: Language;
}

export const usePostDetailData = ({ slug, language }: Props) => {
  const [data, setData] = useState<PostType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const getPostData = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const res = await GET({ slug, language });
      setData(res.post);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch gallery data");
    } finally {
      dispatch(setLoading(false));
    }
  }, [language]);

  useEffect(() => {
    getPostData();
  }, [language]);

  return { data, error };
};
