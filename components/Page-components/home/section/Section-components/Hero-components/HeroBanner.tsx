"use client";
import React, { useState, useEffect, Fragment } from "react";
import Slider from "@/components/Layout-components/Slider/Slider";
import { getSliderRequest } from "@/app/api/_get/route";
import { DefaultPageDataType, SliderListType } from "@/types/type";
import { setLoading } from "@/redux/slices/globalSlice";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import Typewriter from "@/components/Layout-components/Typewriter";


export default function HeroBanner({
  content,
}: {
  content: DefaultPageDataType | null;
}) {
  const [data, setData] = useState<SliderListType | null>(null);
  const dispatch = useAppDispatch();

  // fetch request api for slider data
  const getSliderList = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getSliderRequest();
      if (res) {
        setData(res.sliders);
        dispatch(setLoading(false));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!data) getSliderList();
  }, [data]);

  return (
    <div className="relative">
      {data && <Slider data={data} />}
      <div className="text-base-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-playfair tracking-wide h-fit w-2/5">
        <div className="relative">
          <div className="space-y-4 text-center backdrop-opacity-20 backdrop-blur backdrop-invert bg-base-100/30 p-4 rounded">
            <h1 className="text-5xl font-bold">{content?.heading}</h1>
            <Typewriter data={content?.description} delay={1} />
          </div>
          <Image
            className="absolute top-[-25px] right-[-30px] xs:hidden"
            src={"/assets/images/wax_holder.png"}
            width={80}
            height={80}
            alt={"wax holder"}
          />
        </div>
      </div>
    </div>
  );
}
