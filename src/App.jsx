import React from "react";

import useIsMobile from "./hooks/useIsMobile";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "./componentes/common/OptimizedImage";
import BarraDeTareas from "./componentes/Barra_de_tareas/BarraDeTareas";

export default function App() {

  const isMobile = useIsMobile();

  const imgSrc = isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal;
  const imgAlt = isMobile ? "Welcome vertical view" : "Welcome horizontal view";

  return (
    <div className="bg-black h-[100svh] flex flex-col relative overflow-hidden">

        <div className="flex-1 relative">
          <OptimizedImage
            src={imgSrc}
            alt={imgAlt}
            className="w-screen brightness-60 dark:brightness-50"
            asBackground={true}
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="100svh"
            showSkeleton={false}
            {...IMAGE_CONFIGS.CRITICAL}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
        <BarraDeTareas />
        </div>

    </div>

  );
}