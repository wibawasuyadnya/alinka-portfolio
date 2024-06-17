import { notFound } from "next/navigation";
import { GET as getImageDetailContent } from "@/app/api/_get/imageDetail";
import { GET as getImagesGalleryContent } from "@/app/api/_get/imageGallery";
import { ImagesDataType } from "@/types/type";
import ContainerArtDetail from "./ImageDetail-components/ContainerArtDetail";

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
    <div className="flex flex-col w-full h-screen items-center justify-center pt-20">
      <ContainerArtDetail
        artDetail={detailArt}
        nextId={nextArtId}
        prevId={previousArtId}
      />
    </div>
  );
}
