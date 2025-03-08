"use client";

import React from "react";
import { Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Menu");

  const routers = [
    {
      href: `/${locale}`,
      label: t("firstOption"),
    },
    {
      href: `/${locale}/nosotros`,
      label: t("secondOption"),
    },
    {
      href: `/${locale}/programa`,
      label: t("thirdOption"),
    },
    {
      href: `/${locale}/abstract`,
      label: t("fourthOption"),
    },
    {
      href: `/${locale}/expositores`,
      label: t("fifthOption"),
    },
    {
      href: `/${locale}/noticias`,
      label: t("sixthOption"),
    },
  ];

  return (
    <>
      <div className="h-14 sm:h-10 flex justify-between items-center text-white bg-[--primary] px-4 sm:px-10 font-work text-sm">
        {/* <Link href="/" className="text-base hidden sm:block">
          <Mail className="inline-block mr-2 h-5 w-5" />
          contact@icoh.com
        </Link> */}
        <Link href={`/${locale}`}>
          <img
            src="/img/logo.png"
            className="w-auto h-11 block sm:hidden"
            alt="Icoh logo"
          />
        </Link>
        <div className="flex gap-1 justify-end sm:flex-row">
          {/* <Link
            href="https://www.facebook.com/Icoh"
            target="_blank"
            className="sm:mx-6 text-end"
          >
            <span className="hidden sm:inline">Icoh</span>
            <img
              src="/img/facebook.png"
              className="inline-block ml-3 h-6 w-6 sm:h-6 sm:w-6"
              alt="Facebook icon"
            />
          </Link> */}
          {/* <Link
            href="https://www.instagram.com/Icoh"
            target="_blank"
            className="sm:mx-4 text-end"
          >
            <span className="hidden sm:inline">icoh.oficial</span>{" "}
            <img
              src="/img/instagram.png"
              className="inline-block ml-3 h-6 w-6 sm:h-7 sm:w-7"
              alt="Instagram icon"
            />
          </Link> */}
          <Link
            href="https://www.linkedin.com/in/norvil-antonio-mera-chu-49509855/"
            target="_blank"
            className="sm:mx-4 text-end"
          >
            <span className="hidden sm:inline">Linkedin Icoh</span>{" "}
            <Linkedin className="inline-block ml-3 h-6 w-6 sm:h-7 sm:w-7" />
          </Link>
        </div>
      </div>

      <div className="mx-auto bg-transparent flex sm:px-10  justify-between items-center">
        <div className="w-1/2 sm:w-auto py-4 sm:ml-14">
          <Link href={`/${locale}`}>
            <Image
              alt="Icoh"
              src="/img/logo.png"
              width={80}
              height={80}
              className="w-12 sm:w-28 h-auto hidden sm:block"
            />
          </Link>
          <h1 className="text-md block pl-4 sm:hidden">
            {t("text")} <br />
            <strong>Icoh</strong>
          </h1>
        </div>
        <div className="w-1/2 flex flex-row sm:flex-col sm:w-full items-end gap-3 justify-end">
          <LocalSwitcher />
          <Menubar className="bg-transparent hidden border-none shadow-none space-x-6 sm:flex">
            {routers.map((router) => (
              <MenubarMenu key={router.href}>
                <MenubarTrigger>
                  <Link
                    href={router.href}
                    className={cn(
                      "font-open text-[17px] transition-colors duration-300 h-8 flex items-center text-[#093352]",
                      pathname === router.href
                        ? "button-active text-[--accent]"
                        : "hover:button-active"
                    )}
                  >
                    {router.label}
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
            ))}
          </Menubar>
          <Menubar className="bg-transparent block border-none shadow-none space-x-6 pr-4 sm:hidden">
            <MenubarMenu>
              <MenubarTrigger className="p-2 rounded-full  bg-white hover:bg-[#9DACB7] active:bg-[#9DACB7]">
                <Menu className="h-4 w-4 text-[#093352]" />
              </MenubarTrigger>
              <MenubarContent>
                {routers.map((router) => (
                  <MenubarItem
                    key={router.href}
                    className={cn("text-[--dark] rounded-md")}
                  >
                    <Link href={router.href} className="block w-full px-4">
                      {router.label}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </>
  );
}
