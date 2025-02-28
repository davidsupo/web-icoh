"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    if (value !== localActive) {
      router.replace(`/${value}`);
    }
  };

  return (
    <Select onValueChange={onSelectChange}>
      <SelectTrigger
        className="sm:w-[100px] bg-white text-xs w-fit h-8 sm:rounded-lg px-2 !py-0 rounded-full text-[--primary] font-jost sm:border-[--primary] font-bold text-center focus:outline-none focus:ring-0 focus:border-none"
      >
        <SelectValue placeholder={localActive.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="es"
            className="text-[#093352] hover:text-[--primary] hover:bg-[--muted] focus:bg-[--muted] focus:text-[--primary] active:bg-[--muted] active:text-[--primary]"
          >
            ES
          </SelectItem>
          <SelectItem
            value="en"
            className="text-[#093352] hover:text-[--primary] hover:bg-[-- --muted] focus:bg-[-- --muted] focus:text-[--primary] active:bg-[-- --muted] active:text-[--primary]"
          >
            EN
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
