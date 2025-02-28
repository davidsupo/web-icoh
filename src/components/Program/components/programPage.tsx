"use client";

import { useTranslations } from "next-intl";
import Tilt from "react-parallax-tilt";
import { Footer } from "@/components/Footer";
import Schedule from "./schedule";

export default function ProgramPage() {
  const t = useTranslations("Program");

  return (
    <div className="flex min-h-screen flex-col items-center ">
      {/* Banner */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
        <img
          alt="banner"
          src="/img/banner-opcion1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative h-full flex items-center justify-center px-4">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            className="w-full max-w-2xl"
          >
            <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-open tracking-tight">
                    {t("title")}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-[--primary] bg-[--primary] text-white rounded-md p-3 font-medium max-w-2xl mx-auto font-work">
                    {t("subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      <div className="w-full pt-8">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl  text-2xl font-bold text-[--primary] mb-4 font-open">
              {t("title1")}
            </h1>
            <p className="text-xl text-gray-600 font-work">{t("subtitle1")}</p>

            <p className="text-lg pt-4  text-[--accent] font-work">
              {t("subtitle2")}
            </p>
          </div>
          <Schedule />
        </div>
      </div>

      <Footer />
    </div>
  );
}
