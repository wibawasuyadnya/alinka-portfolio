import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CircleX } from "lucide-react";
import {
  getImagesGalleryContent,
  getImageDetailContent,
} from "@/app/api/_get/route";
import { ImagesDataType } from "@/types/type";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArtIDetail({ params }: Props) {
  const { id } = params;
  const detailArt = await getImageDetailContent({ id });
  const galleryData = await getImagesGalleryContent();

  if (!detailArt || !galleryData) {
    return notFound();
  }

  const allArts: ImagesDataType = galleryData.arts;

  const getNextArtId = () => {
    const currentIndex = allArts.findIndex((art) => art.id === id);
    return allArts[(currentIndex + 1) % allArts.length].id;
  };

  const getPreviousArtId = () => {
    const currentIndex = allArts.findIndex((art) => art.id === id);
    return allArts[(currentIndex - 1 + allArts.length) % allArts.length].id;
  };

  const nextArtId = getNextArtId();
  const previousArtId = getPreviousArtId();

  return (
    <div className="flex flex-col w-full min-h-[900px] items-center justify-center">
      <div className="relative w-fit">
        <Image
          src={detailArt.art.image.url}
          alt={detailArt.art.name}
          width={500}
          height={600}
          className="h-[600px] object-contain"
        />
        <Link className="absolute top-0 right-[-20px]" href={"/"}>
          <CircleX className="stroke-primary bg-white w-11 h-11 rounded-full" />
        </Link>
        <div className="w-full flex flex-row justify-between items-center px-14 py-4">
          <Link href={`/art/${previousArtId}`}>
            <b>Previous</b>
          </Link>
          <Link href={`/art/${nextArtId}`}>
            <b>Next</b>
          </Link>
        </div>
      </div>
    </div>
  );
}
