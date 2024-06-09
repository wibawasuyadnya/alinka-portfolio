"use client";
import { getSocialMedia } from "@/app/api/_get/route";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { SocialDataType } from "@/types/type";
import React, { useState, useEffect } from "react";
import SocialIcons from "./SocialMediaIcons";
import { Heart } from "lucide-react";

export default function Footer() {
  const [data, setData] = useState<SocialDataType[] | null>(null);
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

  return (
    <div className="flex flex-row justify-between h-fit px-8 py-6 bg-base-300">
      <div className="flex flex-row gap-4 justify-center items-center">
        {data && (
          <SocialIcons
            icons={data.map((social) => ({
              name: social.name,
              url: social.url,
            }))}
          />
        )}
        <p className="text-sm font-light">Alinka Harun Dwie Hartanto</p>
      </div>

      <div className="flex flex-row gap-2">
        <h5 className="font-normal text-base">Made with</h5>
        <Heart style={{ width: "20px", fill: "#f56565", stroke: "#f56565" }} />
      </div>
    </div>
  );
}
