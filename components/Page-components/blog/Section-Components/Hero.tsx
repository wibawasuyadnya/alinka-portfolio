import React, { MouseEvent } from "react";
import { setTags } from "@/redux/slices/globalSlice";
import { useTagsData } from "@/hooks/data/useTagsData";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Language } from "@/types/enum";

export default function Hero({ language }: { language: Language }) {
  const dispatch = useAppDispatch();
  const selectedTags = useAppSelector((state) => state.global.tags);
  const { data: tags } = useTagsData({ language });

  const handleSelectTagsFilter = (target: string[]): void => {
    dispatch(setTags(target));
  };

  return (
    <div className="h-[400px] flex flex-col justify-center items-center">
      <h1 className="text-6xl font-playfair font-bold tracking-wide">Blog</h1>
    </div>
  );
}
