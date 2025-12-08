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

  const sponsors = [
    {
      src: '/img/sponsors/petroperu.png',
      alt: 'Petro Perú'
    },
    { src: '/img/sponsors/angloamerican.png', alt: 'Anglo American' },
    { src: '/img/sponsors/centro-medico-trabajador.png', alt: 'Centro médico del trabajador' },
    { src: '/img/sponsors/chinalco.jpg', alt: 'Chinalco' },
    { src: '/img/sponsors/grupo-tu-salud.jpg', alt: 'Grupo tu salud' },
    { src: '/img/sponsors/pulsosalud.png', alt: 'Pulsosalud' },
    { src: '/img/sponsors/rest.jpg', alt: 'Logo Rest' },
    { src: '/img/sponsors/sama.png', alt: 'Logo SAMA' }
  ]

  const academicSociety = [
    { src: '/img/academic-society/also.jpg', alt: 'Logo Also' },
    { src: '/img/academic-society/colombiana-medicina-del-trabajo.jpg', alt: 'Logo Sociedad Colombiana de Medicina del Trabajo' },
    { src: '/img/academic-society/ergonomia-peru.png', alt: 'Sociedad científica de Ergonomía y Psicosociología del Perú' },
    { src: '/img/academic-society/jovenes-juristas.jpg', alt: 'Logo Jovenes Juristas' },
    { src: '/img/academic-society/neumoconiosis.jpg', alt: 'Asociación Observatorio Internacional Neumoconiosis' },
    { src: '/img/academic-society/somoma.jpg', alt: 'Sociedad de Medicina Ocupacional y Medio Ambiente' },
    { src: '/img/academic-society/sopergo.png', alt: 'Sociedad peruana de ergonomia' },
    { src: '/img/academic-society/sopeso.png', alt: 'Sociedad peruana de salud ocupacional' },
    { src: '/img/academic-society/ulaergo.jpg', alt: 'Unión Latinoamericana de ergonomía' }
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

{/* Sección de Soporte Académico */}
      <section className="container mx-auto px-4 py-0 sm:py-9 max-w-screen-xl">
        <div className="container mx-auto px-4">
          <p className="text-center font-work text-lg font-semibold mb-6 text-[--primary]">
            {t("Academic-support.title")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex justify-center items-center">
              <img 
                src="/img/co_organizers/SCOHSSEIS.jpg" 
                alt="SCOHSSEIS" 
                className="h-40 sm:h-44 md:h-48 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="/img/co_organizers/Logo-ICOH-Comunidad.jpg" 
                alt="ICOH Comunidad" 
                className="h-20 sm:h-24 md:h-28 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Auspicio Académico UDEP */}
      <section className="container mx-auto px-4 py-6 sm:py-9 mb-6 max-w-screen-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Columna de Texto */}
            <div className="text-center md:text-left">
              <p className="font-work text-base sm:text-lg text-gray-700 leading-relaxed">
                {t("Academic-sponsorship.text")}
              </p>
            </div>
            
            {/* Columna de Imagen */}
            <div className="flex justify-center items-center">
              <img 
                src="/img/sponsors/UDEP-Medicina.png" 
                alt="Universidad de Piura - Facultad de Medicina Humana" 
                className="h-32 sm:h-40 md:h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>


          <div className="relative px-2 sm:px-4">
            <p className="text-center font-work text-lg font-semibold mb-6 text-[--primary]">
              {t("Academic-society.title")}
            </p>
            <Carousel
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {renderCarouselItems(academicSociety)}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
            </Carousel>
          </div>
          <p className="text-center font-work text-base text-gray-700 mb-4 mx-auto mt-4">
            {t("Co-organizers.description")}
          </p>
          <div className="flex justify-center">
            <img 
              src="/img/co_organizers/minsa.png" 
              alt="MINSA" 
              className="h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6 sm:py-9 mb-6 max-w-screen-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Columna de Imagen */}
            <div className="flex justify-center items-center">
              <img 
                src="/img/shipibos.jpg" 
                alt="Colectivo Shipibas Muralistas" 
                className="h-32 sm:h-40 md:h-48 object-contain"
              />
            </div>
            {/* Columna de Texto */}
            <div className="text-center md:text-left">
              <p className="font-work text-base sm:text-lg text-gray-700 leading-relaxed">
                {t("Shipibo-participation.text")}
              </p>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Sección de Auspiciadores */}
      <section className="container mx-auto px-4 sm:py-9 mb-6 max-w-screen-xl">
        <div className="container mx-auto px-4">
          <p className="text-center font-work text-lg  font-semibold mb-6 text-[--primary]">{t("Sponsors.subtitle")}</p>
          <div className="relative px-2 sm:px-4">
            <Carousel
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {renderCarouselItems(sponsors)}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 h-10 w-10 border-[#005883] text-[#005883] hover:bg-[#005883] hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
