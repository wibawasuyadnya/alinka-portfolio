"use client";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import useScrollProgress from "@/hooks/useScrollProgress";

const ScrollProgress = ({ count }: { count: number }) => {
  const dashCount = count;
  const scrollProgress = useScrollProgress();
  const filledDashes = Math.round((scrollProgress / 110) * dashCount);
  return (
    <div className="fixed flex flex-col justify-center gap-3 w-6 h-screen top-0 right-8">
      {Array.from({ length: dashCount }).map((_, index) => (
        <div
          key={index}
          className={`${
            index === filledDashes
              ? "bg-primary opacity-100"
              : "bg-neutral opacity-40 border"
          }
            h-1 w-full rounded-full border-solid border-primary`}
        />
      ))}
    </div>
  );
};

export default ScrollProgress;
