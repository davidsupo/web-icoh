"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import FormContact from "@/components/FormContact";
import { Footer } from "@/components/Footer";
import Banner from "@/components/Banner";
import Contador from "./sections";

export default function HomePage() {
  const t = useTranslations("Home");

  const t1 = useTranslations("Get-involved");

  const topics = [
    t("information.topics.first"),
    t("information.topics.second"),
    t("information.topics.third"),
    t("information.topics.fourth"),
    t("information.topics.fifth"),
    t("information.topics.sixth"),
    t("information.topics.seventh"),
    t("information.topics.eighth"),
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Banner />
      <div className="py-8">
        <Contador />
      </div>
      <main className="flex w-full flex-col items-center px-4">
        {/* ICOH Section */}
        <section className="container my-6 md:my-9 grid max-w-screen-lg gap-6 md:gap-16 md:grid-cols-[1fr,auto] text-justify">
          <div className="space-y-4">
            <h1 className="text-center font-open text-lg sm:text-xl md:text-4xl font-semibold text-[--primary]">
              {t("icoh.title")}
            </h1>
            <div className="space-y-4">
              <p className="text-balance font-work text-xs leading-relaxed sm:text-[16px]">
                {t("icoh.firsttext")}
              </p>
              <p className="text-balance font-work text-xs leading-relaxed sm:text-[16px]">
                {t("icoh.secondtext")}{" "}
                <strong className="text-[--primary]">{t("icoh.strong")}</strong>
                , {t("icoh.thirdtext")}. {t("icoh.fourthtext")}
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image
              src="/img/icoh-logo.jpg"
              alt="ICOH Logo"
              width={256}
              height={320}
              className="object-cover transform transition-transform duration-780 ease-in-out hover:scale-105"
            />
          </div>
        </section>
        {/* SCOM Section */}
        <section className="container my-6 md:my-9 grid max-w-screen-lg gap-6 md:gap-16 md:grid-cols-[auto,1fr] md:px-4 text-justify">
          <div className="hidden sm:block items-center justify-center sm:pt-20">
            <Image
              src="/img/scon.jpg"
              alt="SCOM Logo"
              width={420}
              height={780}
              className="object-cover transform transition-transform duration-780 ease-in-out hover:scale-105 rounded-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-center font-open text-lg sm:text-xl md:text-4xl font-semibold text-[--primary]">
              {t("Scom.title")}
            </h2>
            <div className="space-y-4">
              <p className="text-balance font-work text-xs leading-relaxed sm:text-[16px]">
                {t("Scom.firsttext")}
              </p>
              <p className="text-balance font-work text-xs leading-relaxed sm:text-[16px]">
                {t("Scom.secondtext")} {t("Scom.thirdtext")}{" "}
                <strong className="text-[--primary]">{t("Scom.strong")}</strong>
                . {t("Scom.fourthtext")}
              </p>
            </div>
          </div>
        </section>

        {/* Secretaria SCOM */}
        {/* ICOH Section */}
        <section className="container my-6 md:my-9 grid max-w-screen-lg gap-6 md:gap-16 md:grid-cols-[1fr,auto] text-justify">
          <div className="space-y-4">
            <h1 className="text-center font-open text-lg sm:text-xl md:text-4xl font-semibold text-[--primary]">
              {t("Secre_Scom.title")}
            </h1>
            <div className="space-y-4">
              <p className="text-balance font-work text-xs leading-relaxed sm:text-[16px]">
                {t("Secre_Scom.firsttext")}{" "}
                <strong className="text-[--primary]">
                  {t("Secre_Scom.strong")}
                </strong>
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image
              src="/img/secretaria-scon.jpg"
              alt="Secretaria SCOM"
              width={320}
              height={390}
              className="object-cover transform transition-transform duration-780 ease-in-out hover:scale-105 rounded-md"
            />
          </div>
        </section>

        <div className="flex flex-col gap-8 rounded-xl bg-[--accent] max-w-screen-xl w-full p-6 sm:p-8 text-white shadow-xl backdrop-blur-lg">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-open font-bold text-center leading-tight">
              {t("information.title")}
            </h1>
            <h2 className="text-xl sm:text-2xl font-open text-center text-white/90 italic">
              {t("information.subtitle")}
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-6 font-work text-sm sm:text-base">
            <p className="text-justify leading-relaxed">
              {t("information.firsttext")} {t("information.secondtext")}
            </p>

            <p className="text-justify leading-relaxed">
              {t("information.thirdtext")}
            </p>

            {/* Date and Location */}
            <div className="bg-white/10 rounded-lg p-4 text-center font-semibold">
              {t("information.fourthtext")}{" "}
              <span className="text-white">{t("information.date")}</span> en{" "}
              <span className="text-white">{t("information.place")}</span>.
            </div>

            {/* Topics */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold border-b border-white/20 pb-2">
                {t("information.topics.text")}
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2 list-none">
                {topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-[--accent]/20 font-bold">
                      {index + 1}.
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-9 w-full px-2 sm:px-0 md:px-8">
          <div className="flex flex-col max-w-screen-lg items-center w-full">
            <h1 className="text-xl sm:text-3xl font-open font-semibold text-[--primary] mb-4 text-center md:text-start w-full">
              {t1("title")}
            </h1>
            <p className="w-full font-work text-gray-800 text-xs sm:text-[17px] border-l-4 pl-6 border-l-[--accent] text-justify mb-8 leading-normal">
              {t1("pretext")} {""}
              <strong className="font-work text-[--primary]">
                {t1("strong")}
              </strong>
            </p>
          </div>

          {/* Formulario y la imagen en la misma línea */}
          <div className="flex p-4 sm:p-8 justify-evenly items-start gap-10 w-full max-w-screen-lg ">
            {/* Formulario */}

            <div
              id="contact-form"
              className="w-full sm:w-2/3 flex justify-center items-center"
            >
              <FormContact />
            </div>

            <div className="sm:flex w-1/3 hidden items-center justify-center sm:pt-8">
              <Image
                src="/img/involucrate.jpg"
                alt="Construcción sostenible"
                width={400}
                height={820}
                className="object-cover transform transition-transform duration-780 ease-in-out hover:scale-105 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
