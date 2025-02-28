"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface TeamMember {
  name: string;
  descripcion: string;
  img: string;
}

interface SubcommitteeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  members: Record<string, TeamMember>;
}

export function SubcommitteeModal({
  isOpen,
  onClose,
  title,
  members,
}: SubcommitteeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogTitle className="text-2xl font-bold text-center text-[--primary] font-open">
          {title}
        </DialogTitle>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {Object.values(members).map((member, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 items-start bg-muted/50 rounded-lg p-4"
              >
                <div className="relative w-full md:w-48 h-48 shrink-0 bg-muted">
                  <Image
                    src={member.img || "/img/placeholder.png"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 192px"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold font-open text-[--accent]">
                    {member.name}
                  </h3>
                  <p className="text-base font-work text-justify">
                    {member.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
