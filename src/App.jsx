import React, { useMemo } from "react";

import Escritorio from "./componentes/Escritorio/Escritorio";

import OptimizedImage, { IMAGE_CONFIGS } from "./componentes/common/OptimizedImage";

import useIsMobile from "./hooks/useIsMobile";

import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

export default function App() {

  const isMobile = useIsMobile();

  const imageConfig = useMemo(() => {
          return {
              src: isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal,
              alt: isMobile ? "Bienvenido vista vertical" : "Bienvenido vista horizontal"
          };
      }, [isMobile]);

  return (
    <div className="bg-blue-950 dark:bg-gray-950 h-[100svh] flex flex-col justify-around">
        <OptimizedImage
          src={imageConfig.src}
          alt={imageConfig.alt}
          className="w-screen brightness-60 dark:brightness-50"
          asBackground={true}
          backgroundSize="cover"
          backgroundPosition="center"
          minHeight="100svh"
          showSkeleton={false}
          {...IMAGE_CONFIGS.CRITICAL}
        />
      <Escritorio />
    </div>

  );
}