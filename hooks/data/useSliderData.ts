"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { SliderListType } from "@/types/type";
import { GET } from "@/app/api/_get/slider";

export const useSliderData = () => {
  const [data, setData] = useState<SliderListType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const getSliderList = async () => {
    dispatch(setLoading(true));
    try {
      const res = await GET();
      setData(res.sliders);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch slider data");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (!data) getSliderList();
  }, [data]);

  return { data, error };
};
