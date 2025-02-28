"use client";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { CircleDollarSign } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";
import { errorToast, successToast } from "@/lib/utils/core.function";

const Contact = z.object({
  name: z.string().min(1, "El nombre no puede estar vacío"),
  country: z.string().min(1, "El país no puede estar vacío"),
  socioEconomicLevel: z
    .string()
    .min(1, "El nivel socioeconómico no puede estar vacío"),
  email: z.string().email("El email no es válido"),
  isICOHAssociate: z.boolean(),
  ICOHCode: z.string().optional(),
  // student: z.string().min(1, "El estudiante no puede estar vacío"),
  phone: z.string().min(1, "El teléfono no puede estar vacío"),
  academicStatus: z.string().min(1, "El estado académico no puede estar vacío"),
  academicLevel: z.string().optional(),
});

export default function FormContact() {
  const [isICOHAssociate, setIsICOHAssociate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [academicStatus, setAcademicStatus] = useState("");

  const t = useTranslations("Contact");
  const tCosts = useTranslations("Contact.costs");

  const ecomomicLevels = ["Alto", "Bajo-Medio"];

  const form = useForm<z.infer<typeof Contact>>({
    resolver: zodResolver(Contact),
    defaultValues: {
      name: "",
      country: "",
      socioEconomicLevel: "",
      email: "",
      isICOHAssociate: false,
      ICOHCode: "",
      // student: "",
      phone: "",
      academicStatus: "",
      academicLevel: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof Contact>) => {
    console.log("Iniciando envío del formulario");
    setIsSubmitting(true);
    try {
      console.log("Datos a enviar:", data);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error en la respuesta del servidor:", errorDetails);
        throw new Error(
          errorDetails.message || "Error al enviar el formulario"
        );
      }

      const responseData = await response.json();
      console.log("Datos de respuesta:", responseData);

      successToast("Formulario enviado", "");
    } catch (error: any) {
      console.error("Error en el cliente:", error);
      errorToast("Error al enviar el formulario", "");
    } finally {
      setIsSubmitting(false);
      console.log("Proceso de envío finalizado");
    }
  };
  //todos los paises
  const countrys = [
    { name: "Perú", value: "peru" },
    { name: "Chile", value: "chile" },
    { name: "Colombia", value: "colombia" },
    { name: "Argentina", value: "argentina" },
    { name: "Ecuador", value: "ecuador" },
    { name: "Bolivia", value: "bolivia" },
    { name: "Paraguay", value: "paraguay" },
    { name: "Uruguay", value: "uruguay" },
    { name: "Venezuela", value: "venezuela" },
    { name: "Brasil", value: "brasil" },
    { name: "México", value: "mexico" },
    { name: "Estados Unidos", value: "estados_unidos" },
    { name: "Canadá", value: "canada" },
    { name: "España", value: "españa" },
    { name: "Francia", value: "francia" },
    { name: "Italia", value: "italia" },
    { name: "Alemania", value: "alemania" },
    { name: "Reino Unido", value: "reino_unido" },
    { name: "China", value: "china" },
    { name: "Japón", value: "japon" },
    { name: "Corea del Sur", value: "corea_del_sur" },
    { name: "India", value: "india" },
    { name: "Australia", value: "australia" },
    { name: "Nueva Zelanda", value: "nueva_zelanda" },
    { name: "Sudáfrica", value: "sudafrica" },
    { name: "Egipto", value: "egipto" },
    { name: "Rusia", value: "rusia" },
    { name: "Turquía", value: "turquia" },
    { name: "Arabia Saudita", value: "arabia_saudita" },
    { name: "Emiratos Árabes Unidos", value: "emiratos_arabes_unidos" },
    { name: "Qatar", value: "qatar" },
    { name: "Kuwait", value: "kuwait" },
    { name: "Irán", value: "iran" },
    { name: "Irak", value: "irak" },
    { name: "Siria", value: "siria" },
    { name: "Líbano", value: "libano" },
    { name: "Jordania", value: "jordania  " },
  ];

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl"
      >
        <h1 className="text-center text-2xl font-work font-bold text-[--primary] mb-8">
          {t("title")}
        </h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormControl>
                <Input
                  className="w-full p-4 border border-gray-300 rounded-lg font-work text-base text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[--primary]/20 focus:border-[--primary] transition-all duration-200"
                  placeholder={t("name")}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="mb-6">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-4 text-base font-work text-gray-700 border border-gray-200 focus:ring-2 focus:ring-[--primary]/20 focus:border-[--primary] transition-all duration-200">
                    <SelectValue
                      className="text-gray-500 font-work"
                      placeholder={t("country")}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countrys.map((country) => (
                    <SelectItem
                      key={country.value}
                      value={country.value}
                      className="text-gray-700"
                    >
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socioEconomicLevel"
          render={({ field }) => (
            <FormItem className="mb-6">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-4 text-base font-work text-gray-700 border border-gray-200 focus:ring-2 focus:ring-[--primary]/20 focus:border-[--primary] transition-all duration-200">
                    <SelectValue
                      className="font-work text-gray-500"
                      placeholder={t("socioeconomic")}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {ecomomicLevels.map((level) => (
                    <SelectItem
                      key={level}
                      value={level}
                      className="text-gray-700"
                    >
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-sm mt-1" />
              <p className="text-sm text-gray-500 mt-2">
                <Link
                  href="https://isi-web.org/low-and-middle-income-countries-and-regions"
                  className="text-[--primary] hover:text-[--primary] hover:underline transition-colors font-work"
                >
                  {t("link")}
                </Link>
              </p>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormControl>
                <Input
                  className="w-full p-4 border border-gray-200 rounded-lg font-work text-base text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-[--primary] focus:border-[--primary] transition-all duration-200"
                  placeholder={t("email")}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isICOHAssociate"
          render={({ field }) => (
            <FormItem className="flex items-center mb-6">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                    setIsICOHAssociate(checked as boolean);
                  }}
                  className="mr-3 h-5 w-5 border-2 border-gray-300 rounded data-[state=checked]:border-[--primary] data-[state=checked]:bg-[--primary] transition-colors duration-200"
                />
              </FormControl>
              <FormLabel className="font-work text-base text-gray-700 cursor-pointer">
                {t("isassociated")}
              </FormLabel>
            </FormItem>
          )}
        />

        {isICOHAssociate && (
          <FormField
            control={form.control}
            name="ICOHCode"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormControl>
                  <Input
                    className="w-full p-4 border border-gray-200 rounded-lg font-work text-base text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[--primary] focus:border-[--primary] transition-all duration-200"
                    placeholder={t("code")}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="academicStatus"
          render={({ field }) => (
            <FormItem className="flex flex-col mb-6">
              <FormLabel className="mb-2 font-work text-base text-gray-700">
                {t("academic.title")}
              </FormLabel>
              <div className="flex items-center space-x-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value === "PreGrado"}
                      onCheckedChange={(checked) => {
                        field.onChange(checked ? "PreGrado" : "");
                        setAcademicStatus(checked ? "PreGrado" : "");
                      }}
                      id="pregrado"
                      className="mr-3 h-5 w-5 border-2 border-gray-300 rounded data-[state=checked]:border-[--primary] data-[state=checked]:bg-[--primary] transition-colors duration-200"
                    />
                    <Label
                      htmlFor="pregrado"
                      className="tfont-work text-base text-[--accent] cursor-pointer"
                    >
                      {t("academic.undergraduate")}
                    </Label>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value === "PostGrado"}
                      onCheckedChange={(checked) => {
                        field.onChange(checked ? "PostGrado" : "");
                        setAcademicStatus(checked ? "PostGrado" : "");
                      }}
                      id="postgrado"
                      className="mr-3 h-5 w-5 border-2 border-gray-300 rounded data-[state=checked]:border-[--primary] data-[state=checked]:bg-[--primary] transition-colors duration-200"
                    />
                    <Label
                      htmlFor="postgrado"
                      className="font-work text-base text-[--accent] cursor-pointer"
                    >
                      {t("academic.postgraduate")}
                    </Label>
                  </div>
                </FormControl>
              </div>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />

        {academicStatus === "PreGrado" && (
          <FormItem className="mb-6">
            <p className="text-sm text-[--accent] mt-2">
              {t("academic.undergraduateMessage")}
              {/* <Link
                href="/constancia-justificacion"
                className="text-[--primary] hover:text-[--primary] hover:underline transition-colors font-work ml-1"
              >
                {t("academic.justificationLink")}
              </Link> */}
            </p>
          </FormItem>
        )}

        {academicStatus === "PostGrado" && (
          <FormField
            control={form.control}
            name="academicLevel"
            render={({ field }) => (
              <FormItem className="mb-6">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full p-4 text-base font-work text-gray-700 border border-gray-200 focus:ring-2 focus:ring-[--primary]/20 focus:border-[--primary] transition-all duration-200">
                      <SelectValue
                        className="font-work text-gray-500"
                        placeholder={t("academic.select")}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* <SelectItem value="Bachiller" className="text-gray-700">{t("academic.optiones.first")}</SelectItem> */}
                    <SelectItem value="Maestria" className="text-gray-700">
                      {t("academic.options.second")}
                    </SelectItem>
                    {/* <SelectItem value="PostMaestria" className="text-gray-700">{t("academic.optiones.third")}</SelectItem> */}
                    <SelectItem value="Doctorado" className="text-gray-700">
                      {t("academic.options.third")}
                    </SelectItem>
                    <SelectItem value="PostDoctorado" className="text-gray-700">
                      {t("academic.options.fourth")}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormControl>
                <Input
                  className="w-full p-4 border border-gray-200 rounded-lg font-work text-base text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[--primary]/20 focus:border-[--primary] transition-all duration-200"
                  placeholder={t("phone")}
                  type="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center">
          <p className="text-center text-sm text-gray-500 mb-8">
            {tCosts("title")}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="mb-6 bg-[--accent] hover:bg-[--accent]/90 text-white font-work text-sm rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <CircleDollarSign className="w-6 h-6 mr-2" />
                {tCosts("button")}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogTitle className="text-center text-xl font-open">
                {tCosts("text")}
              </DialogTitle>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[--primary] hover:bg-[--primary]/90">
                      <TableHead className="border p-2 text-white font-semibold text-center">
                        {tCosts("subtitle")}
                      </TableHead>
                      <TableHead className="border p-2 text-white font-semibold text-center">
                        {tCosts("earlyBird")}
                      </TableHead>
                      <TableHead className="border p-2 text-white font-semibold text-center">
                        {tCosts("regular")}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(tCosts.raw("categories")).map(
                      ([categoryKey, category]: [string, any]) => (
                        <React.Fragment key={categoryKey}>
                          <TableRow className="bg-gray-100">
                            <TableCell
                              colSpan={3}
                              className="border p-2 font-semibold text-center"
                            >
                              {category.type}
                            </TableCell>
                          </TableRow>
                          {Object.entries(category.countries).map(
                            ([countryKey, country]: [string, any]) => (
                              <TableRow
                                key={`${categoryKey}-${countryKey}`}
                                className={
                                  countryKey.includes("low_middle")
                                    ? "bg-gray-50"
                                    : ""
                                }
                              >
                                <TableCell className="border p-2">
                                  {country.name}
                                </TableCell>
                                <TableCell className="border p-2 text-center">
                                  {country.early_bird}
                                </TableCell>
                                <TableCell className="border p-2 text-center">
                                  {country.regular}
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </React.Fragment>
                      )
                    )}
                  </TableBody>
                </Table>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre> */}

        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-full py-4 px-6 bg-[--primary] hover:bg-[--primary]/90 text-white font-work text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                {t("processing")}
              </span>
            ) : (
              t("submit")
            )}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
