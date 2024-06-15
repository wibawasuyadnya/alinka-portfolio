"use client";
import React from "react";
import PlaceHolderData from "@/components/Layout-components/PlaceholderData";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useRouter } from "next/navigation";
import { useImageGalleryData } from "@/hooks/data/useImageGallery";

export default function ImageGalleryList() {
  const router = useRouter();
  const { data: images } = useImageGalleryData();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return images && images.length >= 0 ? (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((gallery, idx) => {
        return (
          <div key={idx} className="masonry-item">
            <div
              onClick={() => router.push(`/art/${gallery.id}`)}
              className="rounded-[20px] hover:shadow-lg relative cursor-pointer transform transition duration-1000 hover:scale-105"
            >
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
              <div className="overlay text-primary-content bg-base-100/50 capitalize">
                {gallery.name}
              </div>
            </div>
          </div>
        );
      })}
    </Masonry>
  ) : (
    <PlaceHolderData type={"empty"} />
  );
}
