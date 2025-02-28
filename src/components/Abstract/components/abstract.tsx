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
        <div className="mb-8 sm:mb-16 max-w-3xl lg:max-w-5xl mx-auto">
          <Card className="md:col-span-1">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[--primary] font-open">
                {t("components.first.title")}
              </h2>
              <p className="mb-4 font-work text-sm sm:text-base">{t("components.first.subtitle")}</p>
              <p className="mb-4 font-work text-sm sm:text-base">{t("components.first.firsttext")}</p>
              <ul className="list-disc pl-4 sm:pl-6 mb-4 space-y-3 font-work text-sm sm:text-base">
                <li>
                  <span>{t("components.first.secondtext")}</span>
                  <strong className="block text-xs sm:text-sm tracking-tighter mt-1 text-[--foreground]">
                    {t("components.first.strongfirst")}
                  </strong>
                </li>
                <li>
                  <span>{t("components.first.thirdtext")}</span>
                  <strong className="block text-xs sm:text-sm tracking-tighter mt-1 text-[--foreground]">
                    {t("components.first.strongsecond")}
                  </strong>
                </li>
              </ul>
              <p className="mb-6 font-work text-sm sm:text-base">{t("components.first.fourthtext")}</p>
              <a
                href="mailto:scomlima2025@gmail.com?subject=Consulta%20SCOM%202025&body=Hola,%20tengo%20estos%20resúmenes%20para%20ser%20evaluados%20..."
                className="block w-full sm:inline-block sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-[--accent] text-white hover:bg-[--primary] text-sm sm:text-base py-2 h-auto">
                  <Mail className="mr-2 h-4 w-4" />
                  scomlima2025@gmail.com
                </Button>
              </a>
            </CardContent>
          </Card>
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
        </div>
      </div>
    </div>
  )
}

