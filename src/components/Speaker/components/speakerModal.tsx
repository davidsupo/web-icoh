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

interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: Speaker;
}

export function SpeakerModal({ isOpen, onClose, speaker }: SpeakerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-opem text-[--accent] text-xl">
            {speaker.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-[200px] h-[200px] mx-auto rounded-md flex items-center justify-center">
            <img
              src={speaker.image || "/placeholder.svg"}
              alt={speaker.name}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
          <DialogDescription className="font-work sm:text-base text-justify">
            {speaker.description}
          </DialogDescription>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className="bg-[--accent] text-white font-work"
          >
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
