"use client";
import React, { useState, useEffect } from "react";
import SocialIcons from "./SocialMediaIcons";
import { Heart } from "lucide-react";
import { useSocialData } from "@/hooks/data/useSocialMediaData";

export default function Footer() {
  const { data: socialData } = useSocialData();
  return (
    <div className="flex flex-row justify-between h-fit px-8 py-6 bg-base-300">
      <div className="flex flex-row gap-4 justify-center items-center">
        {socialData && (
          <SocialIcons
            icons={socialData.map((social) => ({
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
