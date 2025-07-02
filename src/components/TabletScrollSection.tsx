"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { useLanguage } from '@/lib/language-context';

export default function YachtTabletScrollSection() {
  const { translations } = useLanguage();
  
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              {translations.yachtTransport.badge} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                {translations.yachtTransport.title}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translations.yachtTransport.description}
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