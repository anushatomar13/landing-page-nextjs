"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function WatchProduct() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
                Timeless Craftsmanship, Unparalleled Precision
              </span>
            </h1>
          </>
        }
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
        >
          <source src="/watch.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </ContainerScroll>
    </div>
  );
}
