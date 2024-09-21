"use client";
import { Language } from "@/types/enum";
import { TagsListType } from "@/types/type";
import { useAppDispatch } from "@/redux/hook";
import { GET } from "@/app/api/_get/_posts/tags";
import { setLoading } from "@/redux/slices/globalSlice";
import { useCallback, useEffect, useState } from "react";

interface Props {
  language: Language;
}

export const useTagsData = ({ language }: Props) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<TagsListType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getTagsData = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const res = await GET({ language });
      setData(res.posts);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch gallery data");
    } finally {
      dispatch(setLoading(false));
    }
  }, [language]);

  useEffect(() => {
    getTagsData();
  }, [language]);

  return { data, error };
};
