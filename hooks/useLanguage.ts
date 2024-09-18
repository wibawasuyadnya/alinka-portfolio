"use client";
import { RootState } from "@/redux/store";
import { setLanguage } from "@/redux/slices/globalSlice";
import { Language } from "@/types/enum";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

export const useLanguage = () => {
  const language = useAppSelector((state: RootState) => state.global.language);
  const dispatch = useAppDispatch();

  const changeLanguage = (language: Language) => {
    dispatch(setLanguage(language));
  };

  return { language, changeLanguage };
};
