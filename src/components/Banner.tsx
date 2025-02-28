"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Banner() {
  const bannerImages = [
    "/img/slider/banner-1.jpg",
    "/img/slider/banner-2.jpg",
    "/img/slider/banner-3.jpg",
    "/img/slider/banner-4.1.jpg",
    "/img/slider/banner-5.jpg",
    "/img/slider/banner-6.jpg",
    "/img/slider/banner-7.jpg",
  ];
  const texture = "/img/texture.png";
  const t = useTranslations("Banner");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bannerImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[--primary] hover:bg-black/50 text-white p-2 rounded-full transition-all md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[--primary] hover:bg-black/50 text-white p-2 rounded-full transition-all md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Centered Content with Tilt Effect */}
      <div className="relative flex h-[70vh] md:h-[90vh] items-center justify-center px-4">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          scale={1.02}
          transitionSpeed={2000}
          className="w-full max-w-3xl border-8"
        >
          <div
            id="contentBanner"
            className="p-6 md:py-20 md:px-12 rounded-xl shadow-2xl bg-opacity-70"
            style={{
              backgroundImage: `url(${texture})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center space-y-6">
              <p className="text-[--primary] font-medium text-lg sm:text-xl font-poppins tracking-wide">
                {t("date")}
              </p>
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-open tracking-tight">
                {t("firsttext")}
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-[--primary] font-medium max-w-2xl mx-auto">
                {t("secondtext")}
              </p>
              <p className="text-base sm:text-lg md:text-base text-white font-medium max-w-2xl mx-auto text-center">
                <span className="font-bold">{t("place")}</span>
                <br />
                <span className="text-sm sm:text-base opacity-90">
                  {t("address")}
                </span>
              </p>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-6 rounded-full text-sm sm:text-lg font-medium transform transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => {
                  const contactForm = document.getElementById("contact-form");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("button")}
              </Button>
            </div>
          </div>
        </Tilt>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-[--accent] scale-110"
                : "bg-[--primary-light] hover:bg-[--primary-light]/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
