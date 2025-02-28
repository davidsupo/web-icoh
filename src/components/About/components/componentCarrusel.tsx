import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

export default function ComponentCarrusel() {
  const t = useTranslations("Us");

  const coOrganizers = [
    {
      src: "/img/co_organizers/Logo-ICOH-Comunidad.jpg",
      alt: "ICOH Comunidad",
    },
    { src: "/img/co_organizers/Logo-Somoma.png", alt: "Somoma" },
    { src: "/img/co_organizers/Logo-Sopergo.jpg", alt: "Sopergo" },
    { src: "/img/co_organizers/Logo-Ulaergo.jpg", alt: "Ulaergo" },
    { src: "/img/sponsors/Logo-Also.jpg", alt: "Also" },
    { src: "/img/sponsors/Logo-Sopeso.png", alt: "Sopeso" },
    { src: "/img/co_organizers/SCOHSSEIS.jpg", alt: "Scohsseis" },
    { src: "/img/co_organizers/LOGO-COLJUNTAS.jpg", alt: "Coljuntas" },
    {
      src: "/img/co_organizers/Logo-SCMT.jpg",
      alt: "Sociedad Colombiana de Medicina del Trabajo",
    },
    {
      src: "/img/sponsors/UDEP-Medicina.png",
      alt: "UDEP-Medicina Humana",
      badge: "Oficio AA-008-2025 FMH-UDEP",
    },
  ];

  const renderCarouselItems = (
    items: { src: string; alt: string; badge?: string }[]
  ) =>
    items.map((item, index) => (
      <CarouselItem
        key={index}
        className="basis-full sm:basis-1/3 px-2 sm:px-4"
      >
        <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.badge && (
                <div className="absolute bottom-0 left-0 right-0 bg-[#005883]/90 text-white text-xs py-1 px-2 text-center">
                  {item.badge}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ));

  return (
    <div className="bg-[--mutted]">
      {/* Sección de Coorganizadores */}
      <section className="container mx-auto px-4 sm:py-9 mb-6 max-w-screen-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-[#005883] mb-6 text-center font-open">
            {t("Co-organizers.title")}
          </h2>
          <div className="relative px-2 sm:px-4">
            <Carousel
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {renderCarouselItems(coOrganizers)}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sección de Auspiciadores */}
      <section className="container mx-auto px-4 sm:py-9 mb-6 max-w-screen-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-[#005883] mb-6 text-center font-open">
            {t("Sponsors.title")}
          </h2>
          <p className="text-center font-work text-lg  font-semibold mb-6 text-[--primary]">{t("Sponsors.subtitle")}</p>
          <div className="relative px-2 sm:px-4">
            {/* <Carousel
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {renderCarouselItems(sponsors)}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
            </Carousel> */}
          </div>
        </div>
      </section>
    </div>
  );
}
