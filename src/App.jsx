import React, { useEffect } from "react";

import useIsMobile from "./hooks/useIsMobile";
import useVirtualKeyboard from "./hooks/useVirtualKeyboard";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "./componentes/common/OptimizedImage";
import BarraDeTareas from "./componentes/Barra_de_tareas/BarraDeTareas";

export default function App() {
  const isMobile = useIsMobile();
  const isKeyboardVisible = useVirtualKeyboard();

  const imgSrc = isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal;
  const imgAlt = isMobile ? "Welcome vertical view" : "Welcome horizontal view";

  // Configurar meta viewport dinámicamente
  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport && isMobile) {
      if (isKeyboardVisible) {
        // Cuando el teclado está visible, usar altura fija
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content');
      } else {
        // Configuración normal
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
      }
    }
  }, [isKeyboardVisible, isMobile]);

  return (
    <div className={`bg-black flex flex-col justify-end transition-all duration-200 ${
      isMobile && isKeyboardVisible 
        ? 'h-screen' // Usar altura fija cuando el teclado está visible
        : 'h-[100svh]' // Altura dinámica normal
    }`}>
      <div className="w-full">
        <OptimizedImage
          src={imgSrc}
          alt={imgAlt}
          className="w-screen brightness-60 dark:brightness-50"
          asBackground={true}
          backgroundSize="cover"
          backgroundPosition="center"
          minHeight={isMobile && isKeyboardVisible ? "100vh" : "100svh"}
          showSkeleton={false}
          {...IMAGE_CONFIGS.CRITICAL}
        />
      </div>

      <div className={`${isMobile && isKeyboardVisible ? 'fixed bottom-0 left-0 right-0 z-50' : ''}`}>
        <BarraDeTareas />
      </div>
    </div>
  );
}