import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

import { FaSpinner } from "react-icons/fa";
import caritaRisa from "../../../../assets/lottie/caritaRisa.json";

import Confetti from "react-confetti";

import RisaRamon from "../../../../assets/audio/RisaRamon.mp3";

import useIsMobile from "../../../../hooks/useIsMobile";

export default function VistaApagadoInicio({ accionApagadoInicio, mentiraApagadoInicio }) {
    const [showSecondContainer, setShowSecondContainer] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);
    const audioRef = useRef(null);

    // Estados para las dimensiones del confetti
    const [confettiDimensions, setConfettiDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const isMobile = useIsMobile();

    // Efecto para actualizar las dimensiones del confetti
    useEffect(() => {
        const updateDimensions = () => {
            setConfettiDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Actualizar dimensiones inmediatamente
        updateDimensions();

        // Escuchar cambios de tamaño y orientación
        window.addEventListener('resize', updateDimensions);
        window.addEventListener('orientationchange', updateDimensions);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateDimensions);
            window.removeEventListener('orientationchange', updateDimensions);
        };
    }, [isMobile]); // Se ejecuta cuando cambia isMobile

    useEffect(() => {
        // Función para detectar la primera interacción del usuario
        const enableAudio = () => {
            setUserInteracted(true);
            // Remover los event listeners después de la primera interacción
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('keydown', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
        };

        // Agregar event listeners para detectar interacción
        document.addEventListener('click', enableAudio);
        document.addEventListener('keydown', enableAudio);
        document.addEventListener('touchstart', enableAudio);

        // Timer para mostrar el segundo contenedor después de 5 segundos
        const timer = setTimeout(() => {
            setShowSecondContainer(true);
        }, 5000);

        // Cleanup
        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('keydown', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
        };
    }, []);

    useEffect(() => {
        // Reproducir audio cuando aparece el segundo contenedor Y el usuario ha interactuado
        if (showSecondContainer && userInteracted && audioRef.current) {
            // Pequeño delay para asegurar que el elemento esté completamente montado
            setTimeout(() => {
                audioRef.current.play().catch(error => {
                    console.log("Error al reproducir audio:", error);
                });
            }, 100);
        }
    }, [showSecondContainer, userInteracted]);

    const handleContainerClick = (e) => {
        e.stopPropagation();
        // Si el usuario no ha interactuado aún, marcar como interactuado
        if (!userInteracted) {
            setUserInteracted(true);
        }
    };

    return (
        <div className="bg-blue-700 w-screen h-[100svh]  
                        fixed inset-0 z-80"
            onClick={handleContainerClick}>
            
            {/* Audio element oculto */}
            <audio 
                ref={audioRef} 
                src={RisaRamon} 
                preload="auto"
                style={{ display: 'none' }}
            />

            {/* Primer contenedor - se muestra los primeros 5 segundos */}
            {!showSecondContainer && (
                <div className="border border-white h-[100svh] flex flex-col items-center justify-center gap-3">
                    <FaSpinner className="animate-spin text-xl lg:text-2xl 2xl:text-3xl 
                                        text-white text-center"/>

                    <span className="text-base lg:text-xl 2xl:text-2xl 
                                text-white text-center">
                        {accionApagadoInicio} el equipo
                    </span>
                    
                    {!userInteracted && (
                        <p className="text-xs lg:text-sm 2xl:text-base 
                                    text-white/70 text-center mt-4">
                            Haz clic en cualquier lugar para habilitar el sonido
                        </p>
                    )}
                </div>
            )}

            {/* Segundo contenedor - se muestra después de 5 segundos */}
            {showSecondContainer && (
                <div className="border border-white h-[100svh] flex flex-col items-center justify-center gap-3">
                    <Confetti 
                        width={confettiDimensions.width}
                        height={confettiDimensions.height}
                        numberOfPieces={300}
                        recycle={true}
                        gravity={0.2}
                    />

                    <div className="w-30 2xl:w-50 overflow-hidden">
                        <Lottie
                            className="w-full object-cover"
                            animationData={caritaRisa}
                            loop={true}
                        />
                    </div>

                    <p className="text-base lg:text-xl 2xl:text-2xl 
                                text-white text-center">
                        Mentira <span translate="no">xD</span>
                    </p>

                    <span className="text-base lg:text-xl 2xl:text-2xl 
                                text-white text-center">
                        No se ha {mentiraApagadoInicio}
                    </span>
                </div>
            )}
        </div>
    );
}