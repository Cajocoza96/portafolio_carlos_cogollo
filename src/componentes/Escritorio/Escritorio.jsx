import React, { useState } from "react";

import useIsMobile from "../../hooks/useIsMobile";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";
import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

import VentanaInicio from "../Ventana_Inicio/VentanaInicio";

export default function Escritorio() {
    const isMobile = useIsMobile();
    const imgSrc = isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal;
    const imgAlt = isMobile ? "Welcome vertical view" : "Welcome horizontal view";

    const [verVentanaInicio, setVerVentanaInicio] = useState(false);

    const toggleVerVentanaInicio = () => {
        setVerVentanaInicio(!verVentanaInicio);
    }
    

    return (
        <>
            <div className="w-full">
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

            {verVentanaInicio && (
                <div className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={toggleVerVentanaInicio}>
                    <div className="fixed bottom-10 left-0 right-0">
                        <VentanaInicio />
                    </div>
                </div>
            )}

            <BarraDeTareas toggleVerVentanaInicio={toggleVerVentanaInicio} />
        </>
    );
}