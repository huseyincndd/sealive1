"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { useLanguage } from '@/lib/language-context'

export default function TabletScrollSection() {
  const { translations } = useLanguage()
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Digital <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Freight Management
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern teknoloji ile freight forwarding operasyonları. 
              Digital documentation, shipment management ve comprehensive logistics dashboard.
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Digital freight management dashboard and logistics operations"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
} 