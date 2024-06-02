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
    if (!data) {
      getSliderList();
    }
  }, []);

  return (
    <Fragment>
      {data && <Slider data={data.sliders} />}
      <div className="text-base-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-playfair tracking-wide h-fit w-fit">
        <div className="text-center bg-base-100 bg-opacity-50 p-4 rounded">
          <h1 className="text-2xl font-bold">Alinka's Art Gallery</h1>
        </div>
      </div>
    </Fragment>
  );
}
