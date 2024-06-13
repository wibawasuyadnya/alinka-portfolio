"use client";
import React from "react";
import { DefaultPageDataType } from "@/types/type";
import { useSectionContent } from "@/hooks/useSectionContent";
import ImageGalleryList from "./Gallery-components/ImageGalleryList";

function Gallery() {
  const gallerySection = useSectionContent("art-gallery");

  const galleryData: DefaultPageDataType | null = gallerySection
    ? {
        description: gallerySection.description,
        heading: gallerySection.heading,
      }
    : null;

  return (
    <div className={"py-16 px-10 bg-base-100 space-y-5"}>
      <h2
        className={
          "mb-24 text-primary-content text-center font-regular text-5xl font-playfair"
        }
      >
        {galleryData && galleryData.heading}
      </h2>
      <ImageGalleryList />
    </div>
  );
}
export default Gallery;
