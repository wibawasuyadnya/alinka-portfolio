"use client";
import React, { useState, useEffect, Fragment } from "react";
import Slider from "@/components/Layout-components/Slider/Slider";
import { getSliderRequest } from "@/app/api/_get/route";
import { SliderListType } from "@/types/type";
import { setLoading } from "@/redux/store/global/globalSlice";
import { useAppDispatch } from "@/redux/hook";

export default function HeroBanner() {
  const [data, setData] = useState<SliderListType | null>(null);
  const dispatch = useAppDispatch();

  // fetch request api for slider data
  const getSliderList = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getSliderRequest();
      if (res) {
        const sliderData = res as SliderListType;
        setData(sliderData);
        dispatch(setLoading(false));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSliderList();
  }, []);

  return <Fragment>{data && <Slider data={data.sliders} />}</Fragment>;
}
