"use client";
import React from "react";
import Link from "next/link";
import { CircleX, ArrowRight, ArrowLeft, Fullscreen } from "lucide-react";
import ImageFullScreen from "./FullScreen";
import { useFullScreenHandle } from "react-full-screen";

interface ContainerArtDetailProps {
  artDetail: {
    art: {
      slug: string;
      name: string;
      releaseDate: string;
      image: {
        url: string;
      };
    };
  };
  nextId: string;
  prevId: string;
}

export default function ContainerArtDetail({
  artDetail,
  nextId,
  prevId,
}: ContainerArtDetailProps) {
  const dayjs = require("dayjs");
  const date = dayjs(artDetail.art.releaseDate).format(`DD/MM/YY`);
  const handle = useFullScreenHandle();

  return (
    <div className="p-[20px] w-full h-full flex flex-row justify-center items-center">
      <div className="relative w-3/4 h-full rounded-xl bg-base-300 flex flex-row gap-3 shadow-[0_0px_30px_1px_rgba(0,0,0,0.18)]">
        <div className="w-full h-auto relative p-4">
          <ImageFullScreen
            handle={handle}
            image={artDetail.art.image}
            name={artDetail.art.name}
          />
          <button onClick={handle.enter} className="absolute top-6 right-6">
            <Fullscreen
              className={"stroke-primary/50 w-8 h-8 hover:stroke-primary/100"}
            />
          </button>
        </div>
        <Link
          className="absolute top-2 right-2 bg-base-300 rounded-full flex flex-row gap-2 justify-center items-center"
          href={"/"}
        >
          <CircleX className="stroke-red-400 w-8 h-8 rounded-full" />
        </Link>

        <div className="w-full flex flex-col justify-center items-stretch gap-5 p-4">
          <p className={"text-sm font-normal absolute top-2"}>
            Release Date: <b>{date}</b>
          </p>
          <div>
            <h1 className="font-bold text-3xl font-playfair capitalize">
              {artDetail.art.name}
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <Link
              className={`bg-primary w-fit flex flex-row rounded-full py-1 px-3 text-white gap-4 font-bold transform transition duration-800 hover:scale-105`}
              href={`/art/${prevId}`}
            >
              <ArrowLeft />
              Previous
            </Link>
            <Link
              className={`bg-primary w-fit flex flex-row rounded-full py-1 px-3 text-white gap-4 font-bold transform transition duration-800 hover:scale-105`}
              href={`/art/${nextId}`}
            >
              Next
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}