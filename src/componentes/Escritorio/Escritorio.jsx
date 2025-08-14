import React, { useRef } from "react";

import useIsMobile from "../../hooks/useIsMobile";
import { useCloseKeyboardOnScroll } from "../../hooks/useCloseKeyboardOnScroll";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";
import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

export default function Escritorio() {
    const isMobile = useIsMobile();
    const imgSrc = isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal;
    const imgAlt = isMobile ? "Welcome vertical view" : "Welcome horizontal view";
    
    // Crear referencia al contenedor donde se detectará el scroll
    const containerRef = useRef(null);
    
    // Implementar el hook para cerrar el teclado en scroll
    useCloseKeyboardOnScroll({
        container: containerRef,
        touchOnly: true,
        delay: 100, // Pequeño delay para suavizar la experiencia
        excludeSelectors: [] // Puedes agregar selectores que quieras excluir si es necesario
    });

    return (
        <>
            <div 
                ref={containerRef}
                className="w-full overflow-auto"
                style={{ height: '100svh' }} // Asegurar que tenga altura para scroll
            >
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

            <BarraDeTareas />

        </>
    );
}