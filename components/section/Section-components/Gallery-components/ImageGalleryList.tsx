"use client";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { ImagesDataType } from "@/types/type";
import React, {useEffect, useState } from "react";
import { getImagesGalleryContent } from "@/app/api/_get/route";
import PlaceHolderData from "@/components/Layout-components/PlaceholderData";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function ImageGalleryList() {
  const [data, setData] = useState<ImagesDataType | null>(null);
  const dispatch = useAppDispatch();

  const getImageList = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getImagesGalleryContent();
      if (res) {
        const art = res.arts;
        setData(art);
        dispatch(setLoading(false));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!data) getImageList();
  }, [!data]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return data && data.length >= 0 ? (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((gallery, idx) => {
        return (
          <div key={idx} className="masonry-item">
            <div className="rounded-[20px] hover:shadow-lg relative cursor-pointer transform transition duration-1000 hover:scale-105">
              <Image
                className=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "20px",
                }}
                alt={gallery.name}
                src={gallery.image.url}
              />
              <div className="overlay text-primary-content bg-base-100/50 capitalize">{gallery.name}</div>
            </div>
          </div>
        );
      })}
    </Masonry>
  ) : (
    <PlaceHolderData type={"empty"} />
  );
}
