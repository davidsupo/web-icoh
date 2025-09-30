"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Tilt from "react-parallax-tilt"
import {
  Mail,
  Stethoscope,
  Heart,
  Brain,
  Building2,
  GraduationCap,
  Shield,
  Thermometer,
  Users,
  Building,
  BookOpen,
  LineChart,
  HardHat,
  AlertTriangle,
  FlaskRoundIcon as Flask,
  Cloud,
  Gavel,
} from "lucide-react"

export default function Abstracts() {
  const t = useTranslations("Abstract")

  const researchLines = [
    { icon: Stethoscope, text: t("components.lines_of_research.first") },
    { icon: Shield, text: t("components.lines_of_research.second") },
    { icon: Heart, text: t("components.lines_of_research.third") },
    { icon: Thermometer, text: t("components.lines_of_research.fourth") },
    { icon: Building2, text: t("components.lines_of_research.fifth") },
    { icon: Brain, text: t("components.lines_of_research.sixth") },
    { icon: GraduationCap, text: t("components.lines_of_research.seventh") },
    { icon: Users, text: t("components.lines_of_research.eighth") },
    { icon: Brain, text: t("components.lines_of_research.nineth") },
    { icon: AlertTriangle, text: t("components.lines_of_research.tenth") },
    { icon: Users, text: t("components.lines_of_research.eleventh") },
    { icon: Building, text: t("components.lines_of_research.twelfth") },
    { icon: BookOpen, text: t("components.lines_of_research.thirteenth") },
    { icon: LineChart, text: t("components.lines_of_research.fourteenth") },
    { icon: HardHat, text: t("components.lines_of_research.fifteenth") },
    { icon: Shield, text: t("components.lines_of_research.sixteenth") },
    { icon: Flask, text: t("components.lines_of_research.seventeenth") },
    { icon: Cloud, text: t("components.lines_of_research.eighteenth") },
    { icon: Gavel, text: t("components.lines_of_research.nineteenth") },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Banner - Improved mobile responsiveness */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img alt="banner" src="/img/banner-resumen.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative h-full flex items-center justify-center px-4">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            className="w-full max-w-sm sm:block hidden"
          >
            <div className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight font-open tracking-tight">
                  {t("title")}
                </h1>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      {/* Main Content - Improved spacing and readability */}
      <div className="container mx-auto px-4 mb-8 sm:mb-16 w-full py-6 sm:py-12">
        {/* Instructions Section */}
        <div className="py-6 sm:py-10 max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[--primary] font-open text-center">
            {t("call.title")}
          </h2>
          <p className="font-semibold text-lg mb-4 font-work text-gray-800 text-center">
            {t("call.bestAction")}
          </p>
          <p className="mb-4 font-work text-sm sm:text-base text-gray-700">
            {t("call.action")}
          </p>
          <p className="font-work text-sm sm:text-base text-gray-700">
            {t("call.text")}
          </p>
        </div>

        {/* Research Lines Section - Improved grid and card layout */}
        <div className="py-6 sm:py-10 max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[--primary] text-center mb-3 sm:mb-4 font-open">
            {t("components.lines_of_research.title")}
          </h2>
          <p className="text-center text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl mx-auto font-work px-4">
            {t("components.lines_of_research.subtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 px-4">
            {researchLines.map((line, index) => (
              <Card
                key={index}
                className="transition-all hover:shadow-lg hover:scale-102 hover:bg-[--primary]/10 focus:bg-[--primary]/10"
              >
                <CardHeader className="space-y-2 p-3 sm:p-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[--primary]/10 flex items-center justify-center">
                    <line.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[--primary]" />
                  </div>
                  <CardTitle className="text-sm sm:text-base font-work text-slate-700 leading-tight">
                    {line.text}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

           <div className="mt-12 sm:mt-16 text-center px-4 max-w-3xl mx-auto">
            <p className="font-work text-sm sm:text-base text-gray-700 mb-4">
              {t("footer.text")}
            </p>
            <Button asChild className="mb-8 bg-[--primary] text-white hover:bg-[--accent]">
              <a href="mailto:scomlima2025@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                {t("footer.mail")}
              </a>
            </Button>
            <p className="font-bold font-work text-base sm:text-lg text-gray-800 mt-6">
              {t("footer.quest")}
            </p>
            <p className="font-semibold font-open text-lg sm:text-xl text-[--primary] mt-2">
              {t("footer.action")}
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button asChild variant="outline" className="border-[--primary] text-[--primary] hover:bg-[--primary] hover:text-white">
                <a
                  href="/doc/Abstract.Submission.GuidelinesSCOM.ICOH.2025-DOC-20250526-WA0092.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.docHref")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

