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
    <div className="bg-black flex flex-col relative"
      style={{
        height: '100vh',
        // Usar dvh (dynamic viewport height) si está disponible
        height: '100dvh'
      }}>

      <div className="w-full flex-1 relative">
        <OptimizedImage
          src={imgSrc}
          alt={imgAlt}
          className="w-screen brightness-60 dark:brightness-50"
          asBackground={true}
          backgroundSize="cover"
          backgroundPosition="center"
          minHeight="100vh"
          showSkeleton={false}
          {...IMAGE_CONFIGS.CRITICAL}
          style={{ minHeight: '100dvh' }}
        />
      </div>

      {/* Barra de tareas que se mantiene visible */}
      <div className={`w-full z-50 ${isMobile ? 'sticky bottom-0' : ''}`}
        style={{
          // En móviles, usar position sticky con bottom 0
          ...(isMobile && {
            position: 'sticky',
            bottom: 0,
            // Asegurar que esté visible incluso con teclado
            transform: 'translateZ(0)', // Forzar layer de composición
          })
        }}>
        <BarraDeTareas />
      </div>

    </div>

  );
}