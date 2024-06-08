"use client";
import { getSocialMedia } from "@/app/api/_get/route";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { SocialDataType } from "@/types/type";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const [data, setData] = useState<SocialDataType | null>(null);
  const dispatch = useAppDispatch();

  const getSocialMediaList = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getSocialMedia();
      if (res) {
        const social = res.socials;
        setData(social);
        dispatch(setLoading(false));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!data) getSocialMediaList();
  }, [!data]);

  console.log(data);

  return (
    <div className="flex flex-row justify-between h-11 bg-base-300">
      <div></div>
    </div>
  );
}
