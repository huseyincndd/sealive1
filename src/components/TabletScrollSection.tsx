"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function YachtTabletScrollSection() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Premium <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                Yacht Transport
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Luxury yacht transportation with specialized handling, real-time tracking, 
              and white-glove service for the world&apos;s most prestigious vessels.
            </p>
          </>
        }
      >
        <Image
          src="https://www.turkdenizcilik.com/wp-content/uploads/2020/12/mega-yacht-transport-05.jpg"
          alt="Luxury yacht being transported on specialized marine carrier"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
} 