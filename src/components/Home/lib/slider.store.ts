import { create } from "zustand";

export interface Slider {
  id: number;
  route: string;
  description: string;
}

interface SliderStore {
  data: Slider[] | null;
  loading: boolean;
  error: string | null;
  fetchData: () => void; // Cambié a `void` ya que no es necesario un `Promise`.
}

// Datos constantes para las imágenes
const staticImages: Slider[] = [
  { id: 1, route: "/img/slider1.jpg", description: "Imagen 1" },
  { id: 2, route: "/img/slider2.jpg", description: "Imagen 2" },
  { id: 3, route: "/img/slider3.jpg", description: "Imagen 3" },
  { id: 4, route: "/img/slider4.jpg", description: "Imagen 4" },
];

const useSlider = create<SliderStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: () => {
    // Simula el proceso de carga
    set({ loading: true, error: null });
    try {
      // Como las imágenes son constantes, simplemente las asignamos después de un "delay" opcional.
      setTimeout(() => {
        set({ data: staticImages, loading: false });
      }, 500); // Simula un pequeño retraso de 500ms.
    } catch (error) {
      set({
        error: "Error al cargar las imágenes.",
        loading: false,
      });
    }
  },
}));

export default useSlider;
