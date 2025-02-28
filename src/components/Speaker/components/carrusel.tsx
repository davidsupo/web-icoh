import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Speaker } from "../lib/speaker.interface";
import { SpeakerModal } from "./speakerModal";

export default function Carrusel() {
  const t = useTranslations("Speaker");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentSpeaker, setCurrentSpeaker] = React.useState<Speaker | null>(null);

  // Transform the translation data into arrays of speakers
  const internationalSpeakers: Speaker[] = [
    {
      id: 1,
      name: t("International.first.name"),
      nationality: t("International.first.Nationality"),
      description: t("International.first.description"),
      image: "/img/Characters/Gogillan.jpg",
    },
    {
      id: 2,
      name: t("International.second.name"),
      nationality: t("International.second.Nationality"),
      description: t("International.second.description"),
      image: "/img/Characters/Ade-Mutiara.jpg",
    },
    {
      id: 3,
      name: t("International.third.name"),
      nationality: t("International.third.Nationality"),
      description: t("International.third.description"),
      image: "/img/Characters/Brett.png",
    },
    {
      id: 4,
      name: t("International.fourth.name"),
      nationality: t("International.fourth.Nationality"),
      description: t("International.fourth.description"),
      image: "/img/Characters/Vishnumohan.png",
    },
    {
      id: 5,
      name: t("International.fifth.name"),
      nationality: t("International.fifth.Nationality"),
      description: t("International.fifth.description"),
      image: "/img/Characters/Moazzam.png",
    },
    {
      id: 6,
      name: t("International.sixth.name"),
      nationality: t("International.sixth.Nationality"),
      description: t("International.sixth.description"),
      image: "/img/Characters/Cuervo.png",
    }
  ];

  const nationalSpeakers: Speaker[] = [
    {
      id: 1,
      name: t("Nationals.first.name"),
      nationality: t("Nationals.first.Nationality"),
      description: t("Nationals.first.description"),
      image: "/img/subcomite/Denis Barnaby.jpg"
    },
    {
      id: 2,
      name: t("Nationals.second.name"),
      nationality: t("Nationals.second.Nationality"),
      description: t("Nationals.second.description"),
      image: "/img/subcomite/Aquiles_Monroy.png"
    },
    {
      id: 3,
      name: t("Nationals.third.name"),
      nationality: t("Nationals.third.Nationality"),
      description: t("Nationals.third.description"),
      image: "/img/subcomite/Aldo Ccahuana.png"
    },
    {
      id: 4,
      name: t("Nationals.fourth.name"),
      nationality: t("Nationals.fourth.Nationality"),
      description: t("Nationals.fourth.description"),
      image: "/img/subcomite/Jonh Astete.jpg"
    },
    {
      id: 5,
      name: t("Nationals.fifth.name"),
      nationality: t("Nationals.fifth.Nationality"),
      description: t("Nationals.fifth.description"),
      image: "/img/Characters/Norvil_Mera_Chu.jpg",
    },
    {
      id: 6,
      name: t("Nationals.sixth.name"),
      nationality: t("Nationals.sixth.Nationality"),
      description: t("Nationals.sixth.description"),
      image: "/img/Characters/Dra. Miriam Panduro.jpg",
    },
    {
      id: 7,
      name: t("Nationals.seventh.name"),
      nationality: t("Nationals.seventh.Nationality"),
      description: t("Nationals.seventh.description"),
      image: "/img/subcomite/Dr. Andrés Arce.jpg",
    },
    {
      id: 8,
      name: t("Nationals.eighth.name"),
      nationality: t("Nationals.eighth.Nationality"),
      description: t("Nationals.eighth.description"),
      image: "/img/subcomite/Melissa_Chuquillanqui.jpg",
    },
    {
      id: 9,
      name: t("Nationals.nineth.name"),
      nationality: t("Nationals.nineth.Nationality"),
      description: t("Nationals.nineth.description"),
      image: "/img/subcomite/None_Landauro.jpg",
    },
    {
      id: 10,
      name: t("Nationals.tenth.name"),
      nationality: t("Nationals.tenth.Nationality"),
      description: t("Nationals.tenth.description"),
      image: "/img/subcomite/Barba Ortega.jpg", 
    },

  ];

  const openModal = (speaker: Speaker) => {
    setCurrentSpeaker(speaker);
    setIsModalOpen(true);
  };

  const renderCarousel = (speakers: Speaker[], title: string) => (
    <div className="mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>
      <Carousel className="w-full max-w-7xl">
        <CarouselContent className="-ml-2 md:-ml-4">
          {speakers.map((speaker) => (
            <CarouselItem 
              key={speaker.id} 
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full"
            >
              <div className="h-full">
                <Card className="border-none shadow-none h-full">
                  <CardContent className="flex flex-col h-full p-4">
                    <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
                      <img
                        src={speaker.image || "/img/placeholder.png"}
                        className="w-full h-full object-cover"
                        alt={`Imagen de ${speaker.name}`}
                      />
                    </div>
                    <div className="flex flex-col flex-grow justify-between">
                      <div className="space-y-2 text-center">
                        <h3 className="font-semibold text-base line-clamp-2">{speaker.name}</h3>
                        <p className="text-sm text-muted-foreground text-center"> {speaker.nationality} </p>
                      </div>
                      <Button 
                        className="mt-4 w-full bg-[--accent] text-white font-work hover:bg-[--primary]" 
                        onClick={() => openModal(speaker)}
                      >
                        Ver más
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );

  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-center font-open text-[--primary]">{t("title2")}</h1>
      <p className="sm:text-xl text-lg mb-8 text-center max-w-3xl mx-auto font-work text-[--foreground]">{t("subtitle2")}</p>
     <div className="container mx-auto px-4 max-w-screen-xl font-open text-[--primary]">
     {renderCarousel(internationalSpeakers, t("International.title"))}
     {renderCarousel(nationalSpeakers, "Expositores Nacionales")} 
     </div>
    
      {currentSpeaker && (
        <SpeakerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          speaker={currentSpeaker}
        />
      )}
    </div>
  );
}

