import React, { useRef } from "react";

import useIsMobile from "../../hooks/useIsMobile";
import { useCloseKeyboardOnScroll } from "../../hooks/useCloseKeyboardOnScroll";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";
import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

export default function Escritorio() {
    const isMobile = useIsMobile();
    const scrollContainerRef = useRef(null);

    useCloseKeyboardOnScroll({
        container: scrollContainerRef,
        touchOnly: true,
        delay: 100,
        excludeSelectors: []
    });

    const imgSrc = isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal;
    const imgAlt = isMobile ? "Welcome vertical view" : "Welcome horizontal view";

    return (
        <>
            <div
                ref={scrollContainerRef}
                className="w-full overflow-y-auto"
                style={{ height: '100svh'}}
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