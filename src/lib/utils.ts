import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { enCountries, esCountries } from "./countries"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCountries(lang: string) {
  if (lang === "es") return esCountries;
  return enCountries;
}