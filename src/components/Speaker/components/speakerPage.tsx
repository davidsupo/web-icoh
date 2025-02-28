"use client";

import Tilt from "react-parallax-tilt";
import { useTranslations } from "next-intl";
import Carrusel from "./carrusel";
import { Footer } from "@/components/Footer";

export default function ExpositoresPage() {
  const t = useTranslations("Speaker");

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Banner */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
        <img
          alt="banner"
          src="/img/banner-speaker.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            className="w-full max-w-2xl"
          >
            <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
              <div className="text-center space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-open tracking-tight">
                    {t("title")}
                  </h1>
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white bg-[--primary] rounded-md p-2 sm:p-3 font-medium max-w-3xl mx-auto sm:block hidden">
                    {t("subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      {/* Carrusel */}
      <div className="w-full max-w-screen-xl mx-auto mt-8 sm:mt-16 px-4 sm:px-8"> 
        <Carrusel />
      </div>
      <Footer />
    </div>
  );
}
