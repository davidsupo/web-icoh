"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LinkedinIcon, MoveUp } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  const t = useTranslations("Menu");
  const t2 = useTranslations("Footer");
  const locale = useLocale();

  const [showButton, setShowButton] = useState(false);

  // Mostrar el botón cuando se hace scroll hacia abajo (más de 300px)
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para desplazar hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[--primary] text-white font-poppins w-full py-4 sm:py-6 relative md:p-9">
      <div className="container max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between  sm:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-6 sm:mb-0">
          <Link href={`/${locale}`} aria-label="Homepage">
            <img
              src="/img/logo.png"
              alt="Icoh Conferencia"
              loading="lazy"
              className="h-16 w-16 sm:h-24 sm:w-24"
            />
          </Link>
        </div>

        {/* Enlaces de Navegación (ocultos en pantallas pequeñas) */}
        <div className="hidden sm:flex flex-wrap sm:flex-nowrap items-center justify-center text-sm text-center space-y-9 sm:space-y-0">
          <div className="flex w-full sm:w-auto justify-center">
            <Link
              href={`/${locale}`}
              className="font-open text-xs sm:text-[16px] uppercase px-6"
              aria-label="Home"
            >
              {t("firstOption")}
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href={`/${locale}/nosotros`}
              className="font-open text-xs sm:text-[16px] uppercase px-6"
              aria-label="About Us"
            >
              {t("secondOption")}
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href={`/${locale}/proyectos`}
              className="font-open text-xs sm:text-[16px] uppercase px-6"
              aria-label="Projects"
            >
              {t("thirdOption")}
            </Link>
          </div>

          <div className="flex w-full sm:w-auto justify-center mt-2 sm:mt-0">
            <Separator orientation="vertical" className="hidden sm:block h-4" />
            <Link
              href={`/${locale}/noticias`}
              className="font-open text-xs sm:text-[16px] uppercase px-6"
              aria-label="News"
            >
              {t("fourthOption")}
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href={`/${locale}/involucrate`}
              className="font-open text-xs sm:text-[16px] uppercase px-6"
              aria-label="Get Involved"
            >
              {t("fifthOption")}
            </Link>
          </div>
        </div>

        {/* Enlaces de redes sociales */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link
            href="https://www.linkedin.com/in/norvil-antonio-mera-chu-49509855/"
            aria-label="Facebook"
          >
            {/* <img
              src="/img/facebook.png"
              alt="Facebook Icon"
              loading="lazy"
              className="h-8 w-8 sm:h-10 sm:w-10"
            /> */}
            <LinkedinIcon size={32} />
          </Link>
          {/* <Link
            href="https://www.instagram.com/moongroup.oficial?igsh=MThtNmdrYWVpYnhoYg=="
            aria-label="Instagram"
          >
            <img
              src="/img/instagram.png"
              alt="Instagram Icon"
              loading="lazy"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </Link> */}
        </div>
      </div>

      <div className="text-center mt-4 text-xs sm:text-[16px] font-mulish">
        Icoh Conferencia ©2025 {t2("copyright")}
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 bg-[--primary-light] p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <MoveUp className="h-7 w-7" />
        </button>
      )}

      {/* Botón flotante de WhatsApp */}
      <Link
        href="https://api.whatsapp.com/send?phone=51942061952&text=Hola,%20quiero%20información%20de%20la%20conferencia."
        aria-label="WhatsApp"
      >
        <div className="group fixed bottom-4 right-4 flex items-end justify-end">
          <div className="bg-green-600 flex p-3 hover:p-4 hover:bg-green-500 text-white rounded-full transition-all duration-200 ease-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 50 50"
              fill="#fff"
            >
              <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.043,1.898C36.895,31.927,37.062,31.755,36.57,33.116z"></path>
            </svg>
          </div>
        </div>
      </Link>
    </footer>
  );
}
