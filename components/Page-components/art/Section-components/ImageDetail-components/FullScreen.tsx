import React from "react";
import { FullScreen, FullScreenHandle } from "react-full-screen";
import Image from "next/image";

interface ImageFullScreenProps {
  name: string;
  image: {
    url: string;
  };
  handle: FullScreenHandle;
}

export default function ImageFullScreen({
  image,
  name,
  handle,
}: ImageFullScreenProps) {
  return (
    <FullScreen handle={handle} className="w-full h-full">
      <Image
        src={image.url}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-full ${
          handle.active ? " object-contain" : "object-cover"
        } rounded-xl`}
      />
    </FullScreen>
  );
}
