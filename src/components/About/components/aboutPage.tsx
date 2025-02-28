
"use client";
import { useState } from "react";
import { ComponentCard } from "./componentCard";
import { ComponentModal } from "./componentModal";
import { useTranslations } from "next-intl";
import Tilt from "react-parallax-tilt";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import ComponentCarrusel from "./componentCarrusel";
import { SubcommitteeModal } from "./modal-subcomite";

interface Subcommittee {
  name: string
  img: string 
  members: Record<
    string,
    {
      name: string
      descripcion: string
      img: string
    }
  >
}
export default function UsPage() {
  const t = useTranslations("Us");
  const Characters = [
    {
      id: 1,
      name: t("Characters.firstFoundling.name"),
      description: `${t("Characters.firstFoundling.description")} ${t(
        "Characters.firstFoundling.description2"
      )}`,
      image: "/img/Characters/Gogillan.jpg",
    },
    {
      id: 2,
      name: t("Characters.secondFoundling.name"),
      description: `${t("Characters.secondFoundling.description")} ${t(
        "Characters.secondFoundling.description2"
      )}`,
      image: "/img/Characters/Norvil_Mera_Chu.jpg",
    },
    {
      id: 3,
      name: t("Characters.thirdFoundling.name"),
      description: `${t("Characters.thirdFoundling.description")} ${t(
        "Characters.thirdFoundling.description2"
      )}`,
      image: "/img/Characters/Dra. Miriam Panduro.jpg",
    }
  ];

  const subcommittees: Subcommittee[] = [
    {
      name: t("SubComites.first.name"),
      img: "/img/subcomite-Academica.jpg",
      members: {
        first: {
          name: t("SubComites.first.members.first.name"),
          descripcion: t("SubComites.first.members.first.descripcion"),
          img: "/img/Characters/Gogillan.jpg",

        },
        second: {
          name: t("SubComites.first.members.second.name"),
          descripcion: t("SubComites.first.members.second.descripcion"),
          img: "/img/Characters/Norvil_Mera_Chu.jpg",
        },
        third: {
          name: t("SubComites.first.members.third.name"),
          descripcion: t("SubComites.first.members.third.descripcion"),
          "img": "/img/subcomite/Denis Barnaby.jpg"
        },
        fourth: {
          name: t("SubComites.first.members.fourth.name"),
          descripcion: t("SubComites.first.members.fourth.descripcion"),
          "img": "/img/subcomite/Aquiles_Monroy.png"
        },
        fifth: {
          name: t("SubComites.first.members.fifth.name"),
          descripcion: t("SubComites.first.members.fifth.descripcion"),
          "img": "/img/subcomite/Aldo Ccahuana.png"
        },
        sixth: {
          name: t("SubComites.first.members.sixth.name"),
          descripcion: t("SubComites.first.members.sixth.descripcion"),
          "img": "/img/subcomite/Barba Ortega.jpg"
        },
        seventh: {
          name: t("SubComites.first.members.seventh.name"),
          descripcion: t("SubComites.first.members.seventh.descripcion"),
          "img": "/img/subcomite/Foto Sandra.jpg"
        },
      },
    },
    {
      name: t("SubComites.second.name"),
      img: "/img/subcomite-Cientifica.jpg",
      members: {
        first: {
          name: t("SubComites.second.members.first.name"),
          descripcion: t("SubComites.second.members.first.descripcion"),
          "img": "/img/subcomite/Miriam Panduro.jpg"
        },
        second: {
          name: t("SubComites.second.members.second.name"),
          descripcion: t("SubComites.second.members.second.descripcion"),
          "img": "/img/subcomite/Jate Ratanachina.jpg"
        },
        third: {
          name: t("SubComites.second.members.third.name"),
          descripcion: t("SubComites.second.members.third.descripcion"),
          "img": "/img/subcomite/Loubna Tahri.jpg"
        },
        fourth: {
          name: t("SubComites.second.members.fourth.name"),
          descripcion: t("SubComites.second.members.fourth.descripcion"),
          "img": "/img/subcomite/Bala Murali Sundram.jpg"
        },
      },
    },
    {
      name: t("SubComites.third.name"),
      img: "/img/subcomite-planificacion.jpg",
      members: {
        first: {
          name: t("SubComites.third.members.first.name"),
          descripcion: t("SubComites.third.members.first.descripcion"),
          img: "/img/subcomite/Melissa_Chuquillanqui.jpg"
        },
        second: {
          name: t("SubComites.third.members.second.name"),
          descripcion: t("SubComites.third.members.second.descripcion"),
          img: "/img/subcomite/None_Landauro.jpg"
        },
        third: {
          name: t("SubComites.third.members.third.name"),
          descripcion: t("SubComites.third.members.third.descripcion"),
          img: "/img/subcomite/Karla Gianmnina.jpg"
        },
        fourth: {
          name: t("SubComites.third.members.fourth.name"),
          descripcion: t("SubComites.third.members.fourth.descripcion"),
          img: ""
        },
        fifth: {
          name: t("SubComites.third.members.fifth.name"),
          descripcion: t("SubComites.third.members.fifth.descripcion"),
          img: ""
        },
        sixth: {
          name: t("SubComites.third.members.sixth.name"),
          descripcion: t("SubComites.third.members.sixth.descripcion"),
          img: ""
        },
        
      },
    },
  ]
    

  const [selectedCharacter, setSelectedCharacter] = useState<
    (typeof Characters)[0] | null
  >(null);

  const [selectedSubcommittee, setSelectedSubcommittee] = useState<Subcommittee | null>(null)

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Banner */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]">
        <img
          alt="banner"
          src="/img/banner-nosotros-.jpg"
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
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white bg-[--primary] rounded-md p-2 sm:p-3 font-medium max-w-3xl mx-auto">
                    {t("subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <div className="w-full py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl  text-2xl font-bold text-[--primary] mb-4 font-open">
              {t("Characters.text")}
            </h1>
            <p className="text-xl  text-gray-600 font-work">
              {t("Characters.subtitle")}
            </p>
            <p className="text-lg pt-4  text-[--accent] font-work">
              {t("subtitle2")}
            </p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Characters.map((personaje) => (
              <ComponentCard
                key={personaje.id}
                name={personaje.name}
                image={personaje.image}
                onReadMore={() => setSelectedCharacter(personaje)}
              />
            ))}
          </div>
          {selectedCharacter && (
            <ComponentModal
              isOpen={!!selectedCharacter}
              onClose={() => setSelectedCharacter(null)}
              name={selectedCharacter.name}
              description={selectedCharacter.description}
              img={selectedCharacter.image}
            />
          )}
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-screen-2xl">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-2xl font-bold text-[--primary] mb-4 font-open">{t("SubComites.title")}</h1>
            <p className="text-xl text-gray-600 font-work">{t("SubComites.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subcommittees.map((subcommittee, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md group cursor-pointer bg-muted"
                onClick={() => setSelectedSubcommittee(subcommittee)}
              >
                <Image
                  src={subcommittee.img || "/img/placeholder.jpg"}
                  alt={subcommittee.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=400"
                  }}
                  priority={index < 3} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2 font-open text-center">{subcommittee.name}</h3>
                  <p className="text-sm text-center font-work">
                    {`${Object.keys(subcommittee.members).length} miembros`}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#093352]/60 text-[--muted] font-work p-2 text-center">
                  <h3 className="text-lg font-semibold">{subcommittee.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedCharacter && (
        <ComponentModal
          isOpen={!!selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          name={selectedCharacter.name}
          description={selectedCharacter.description}
          img={selectedCharacter.image}
        />
      )}

      {selectedSubcommittee && (
        <SubcommitteeModal
          isOpen={!!selectedSubcommittee}
          onClose={() => setSelectedSubcommittee(null)}
          title={selectedSubcommittee.name}
          members={selectedSubcommittee.members}
        />
      )}


      <section className="w-full">
        <ComponentCarrusel />
      </section>

      <Footer />
    </div>
  );
}
