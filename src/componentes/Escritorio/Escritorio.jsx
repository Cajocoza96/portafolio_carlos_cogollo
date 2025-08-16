import React, { useState } from "react";

import useIsMobile from "../../hooks/useIsMobile";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";
import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

import VentanaInicio from "../Ventanas/Ventana_inicio/VentanaInicio";

import ContIconArcEscritorio from "./ContIconArcEscritorio";

export default function Escritorio() {
    const isMobile = useIsMobile();
    const imgSrc = isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal;
    const imgAlt = isMobile ? "Welcome vertical view" : "Welcome horizontal view";

    const [verVentanaInicio, setVerVentanaInicio] = useState(false);

    const toggleVerVentanaInicio = () => {
        setVerVentanaInicio(!verVentanaInicio);
    }

    const [verArchivo, setVerArchivo] = useState(false);

    const toggleVerArchivo = () => {
        setVerArchivo(!verArchivo);
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

            <ContIconArcEscritorio 
                toggleVerArchivo={toggleVerArchivo}
                verArchivo={verArchivo}
                />

            {verVentanaInicio && (
                <VentanaInicio 
                    toggleVerVentanaInicio={toggleVerVentanaInicio}
                    toggleVerArchivo={toggleVerArchivo}
                    verArchivo={verArchivo}
                />
            )}

            <BarraDeTareas 
                toggleVerVentanaInicio={toggleVerVentanaInicio} 
                verArchivo={verArchivo}
            />
        </>
    );
}