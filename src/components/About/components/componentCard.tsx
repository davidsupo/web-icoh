import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface CharacterCardProps {
  name: string
  image: string
  onReadMore: () => void
}

export function ComponentCard({ name, image, onReadMore }: CharacterCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-square relative">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{name}</h3>
        <Button 
          onClick={onReadMore} 
          className="bg-[--accent] hover:bg-blue-700 text-white font-medium px-6"
        >
          Ver más
        </Button>
      </div>
    </div>
  )
}

