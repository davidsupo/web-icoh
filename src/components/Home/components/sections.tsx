import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Reloj() {

  const t = useTranslations("Home");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const eventDate = new Date("December 11, 2025 08:00:00").getTime();
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(countdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold font-poppins text-blue-900 mb-2">
          {t("contador.text")}
        </h3>
        <p className="text-gray-600 text-lg font-poppins">{t("contador.description")}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 ">
        <div>
          <Image
            src="/img/slider3.jpg"
            alt="Reloj"
            width={400}
            height={400}
            className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-blue-900">
              {timeLeft.days}
            </span>
            <p className="text-gray-500 text-sm">{t("contador.days")}</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-blue-900">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <p className="text-gray-500 text-sm">{t("contador.hours")}</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-blue-900">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <p className="text-gray-500 text-sm">{t("contador.minutes")}</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-blue-900">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <p className="text-gray-500 text-sm">{t("contador.seconds")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
