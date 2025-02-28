import type { Metadata } from "next";
import { Jost, Poppins, Open_Sans, Work_Sans } from "next/font/google";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { ReactQueryClientProvider } from "@/components/Provider";
import { NextIntlClientProvider } from "next-intl";
// import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const work_sans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICOH",
  icons: {
      icon: "logo.png",
  },
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <ReactQueryClientProvider>
      <html lang={locale}>
        <body
          className={`${poppins.variable} ${jost.variable} ${open_sans.variable} ${work_sans.variable}  font-sans bg-[#EDEDED] sm:bg-transparent`}
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
