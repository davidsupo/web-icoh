import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Speaker } from "../lib/speaker.interface";
import { useTranslations } from "next-intl";

interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: Speaker;
}

export function SpeakerModal({ isOpen, onClose, speaker }: SpeakerModalProps) {
  const t = useTranslations("Speaker");
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="max-h-[90vh] flex flex-col">
    <DialogHeader className="flex-shrink-0">
      <DialogTitle className="font-open text-[--accent] text-xl">
        {speaker.name}
      </DialogTitle>
    </DialogHeader>
    <div className="flex-1 overflow-y-auto min-h-0">
      <div className="grid gap-4 py-4">
        <div className="w-[200px] h-[200px] mx-auto rounded-md flex items-center justify-center">
          <img
            src={speaker.image || "/img/placeholder.png"}
            alt={speaker.name}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-md"
          />
        </div>
        <DialogDescription className="font-work text-sm sm:text-base text-justify px-2">
          {speaker.description}
        </DialogDescription>
      </div>
    </div>
    <div className="flex justify-end flex-shrink-0 pt-4 border-t">
      <Button
        onClick={onClose}
        className="bg-[--accent] text-white font-work hover:bg-[--primary]"
      >
        {t("buttonCloseModal")}
      </Button>
    </div>
  </DialogContent>
</Dialog>
  );
}
