"use client"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import Tilt from "react-parallax-tilt"
import ArticlesSection, { type Article, type Newsletter } from "./ArticlesSection"
import UpcomingEventsSection from "./upcoming-events-section"

export default function NewsPage() {
  const t = useTranslations("New")

  const articles: (Newsletter | Article)[] = [
    {
      type: "article",
      title: t("articles.elperuano.title"),
      author: "",
      description: t("articles.elperuano.descripcion"),
      buttonText: t("articles.elperuano.button"),
      pdfUrl: "https://elperuano.pe/noticia/277964-la-salud-ocupacional-es-corresponsabilidad-de-empleadores-y-trabajadores-la-norma-lo-exige",
      maxWidth: "500",
      imageUrl: "/img/norvil_elperuano.png"
    },
    {
      type: "article",
      title: t("articles.seventh.title"),
      author: "",
      description: t("articles.seventh.descripcion"),
      buttonText: "",
      pdfUrl: "",
      imageUrl: "/img/work_and_health.png"
    },
    {
      type: "newsletter",
      title: t("articles.first.title"),
      subtitle: t("articles.first.subtitle"),
      description: t("articles.first.descripcion"),
      description2: t("articles.first.descripcion2"),
      year: t("articles.first.year"),
      volume: t("articles.first.volume"),
      buttonText: t("articles.first.button"),
      pdfUrl: "/doc/newsletters/ICOH Newsletter vol22.pdf",
    },
    {
      type: "article",
      title: t("articles.second.title"),
      author: `${t("articles.second.nameAutor.first")}, ${t("articles.second.nameAutor.second")}, ${t("articles.second.nameAutor.third")}, ${t("articles.second.nameAutor.fourth")}`,
      description: t("articles.second.descripcion"),
      buttonText: t("articles.second.button"),
      pdfUrl: "/doc/articles/Assessing Physical Fitness for Night Shift RolesPhysiological Considerations and Practical Adaptati.pdf",
    },
    {
      type: "article",
      title: t("articles.third.title"),
      author: t("articles.third.nameAutor"),
      description: t("articles.third.descripcion"),
      buttonText: t("articles.third.button"),
      pdfUrl: "/doc/articles/From the North of Perú to the North of Africa a long journey full of learning, inspiration and memo.pdf",
    },
    {
      type: "article",
      title: t("articles.fourth.title"),
      author: `${t("articles.fourth.nameAutor.first")}, ${t("articles.fourth.nameAutor.second")}`,
      description: t("articles.fourth.descripcion"),
      buttonText: t("articles.fourth.button"),
      pdfUrl: "/doc/articles/9th SC OM Webinar_Occupational Skin Disorders.pdf",
    },
    {
      type: "article",
      title: t("articles.fifth.title"),
      author: `${t("articles.fifth.nameAutor.first")}, ${t("articles.fifth.nameAutor.second")}, ${t("articles.fifth.nameAutor.third")}, ${t("articles.fifth.nameAutor.fourth")}`,
      description: t("articles.fifth.descripcion"),
      buttonText: t("articles.fifth.button"),
      pdfUrl: "/articles/ICOH National Secretaries from the Global South  collaborate to host a webinar on OHS in Mining.pdf",
    },
    {
      type: "article",
      title: t("articles.sixth.title"),
      author: t("articles.sixth.nameAutor"),
      description: t("articles.sixth.descripcion"),
      buttonText: t("articles.sixth.button"),
      pdfUrl: "/doc/articles/A multi-disciplinary and participative approach in Occupational Health and Safety to face the chall.pdf",
    }
  ]

  const events = [
    {
      id: "1",
      title: t("events.first.title"),
      date: t("events.first.date"),
      time: t("events.first.time"),
    },
    {
      id: "2",
      title: t("events.second.title"),
      date: t("events.second.date"),
      time: t("events.second.time"),
    },
    {
      id: "3",
      title: t("events.third.title"),
      date: t("events.third.date"),
      time: t("events.third.time"), 
    },
    {
      id: "4",
      title: t("events.fourth.title"),
      date: t("events.fourth.date"),
      time: t("events.fourth.time"), 
    },
    {
      id: "5",
      title: t("events.fifth.title"),
      date: t("events.fifth.date"),
      time: t("events.fifth.time"),
    },
    {
      id: "6",
      title: t("events.sixth.title"),
      date: t("events.sixth.date"),
      time: t("events.sixth.time"), 
    },
    {
      id: "7",
      title: t("events.seventh.title"),
      date: t("events.seventh.date"),
      time: t("events.seventh.time"), 
    },
    {
      id: "8",
      title: t("events.eighth.title"),
      date: t("events.eighth.date"),
      time: t("events.eighth.time"),
    }
  ]

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Banner - improved mobile responsiveness */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
        <img alt="banner" src="/img/banner-opcion1.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative h-full flex items-center justify-center px-4">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            className="w-full max-w-2xl"
          >
            <div className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
              <div className="text-center space-y-4 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-open tracking-tight">
                    {t("title")}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[--primary] bg-[--primary] text-white rounded-md p-2 sm:p-3 font-medium max-w-2xl mx-auto font-work">
                    {t("subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-4 max-w-screen-xl pt-8 sm:pt-12 md:pt-16">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[--primary] mb-3 sm:mb-4 font-open">
              {t("title2")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-work px-4">{t("subtitle2")}</p>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <UpcomingEventsSection events={events} title={t("events.title")} subtitle={t("events.subtitle")} />

        <div className="my-8 sm:my-12 md:my-16 border-t border-gray-200"></div>

        <ArticlesSection articles={articles} sectionTitle={t("articles.title")} />
      </main>

      <Footer />
    </div>
  )
}

