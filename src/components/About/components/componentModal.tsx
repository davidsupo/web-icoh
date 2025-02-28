import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description: string;
  img: string;
}

export function ComponentModal({
  isOpen,
  onClose,
  name,
  description,
  img,
}: ComponentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="sm:max-w-3xl bg-white shadow-lg rounded-lg p-6">
    <DialogHeader className="text-[--accent]">
      <DialogTitle className="text-center font-open text-xl">{name}</DialogTitle>
    </DialogHeader>
    
    {/* Contenedor en dos columnas */}
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Imagen alineada a la izquierda */}
      <div className="w-full sm:w-1/3 flex justify-center">
        <Image
          src={img}
          alt={name}
          width={400}
          height={600}
          className="w-full object-contain rounded-md"
        />
      </div>

      {/* Descripción al lado derecho */}
      <div className="w-full sm:w-2/3">
        <DialogDescription className="font-work sm:text-base text-justify">
          {description}
        </DialogDescription>
      </div>
    </div>
  </DialogContent>
</Dialog>

  
  
  );
}
