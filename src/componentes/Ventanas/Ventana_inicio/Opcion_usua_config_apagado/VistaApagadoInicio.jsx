import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

import { FaSpinner } from "react-icons/fa";
import caritaRisa from "../../../../assets/lottie/caritaRisa.json";

import Confetti from "react-confetti";

import RisaRamon from "/assets/audio/RisaRamon.mp3";

import useIsMobile from "../../../../hooks/useIsMobile";

export default function VistaApagadoInicio({ accionApagadoInicio, mentiraApagadoInicio, userInteracted = false }) {
    const [showSecondContainer, setShowSecondContainer] = useState(false);
    const audioRef = useRef(null);

    const [confettiDimensions, setConfettiDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const isMobile = useIsMobile();

    useEffect(() => {
        const updateDimensions = () => {
            setConfettiDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        window.addEventListener('orientationchange', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
            window.removeEventListener('orientationchange', updateDimensions);
        };
    }, [isMobile]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondContainer(true);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (showSecondContainer && userInteracted && audioRef.current) {
            setTimeout(() => {
                audioRef.current.play().catch(error => {
                    console.log("Error al reproducir audio:", error);
                });
            }, 100);
        }
    }, [showSecondContainer, userInteracted]);

    const handleContainerClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={handleContainerClick}>

            <audio
                ref={audioRef}
                src={RisaRamon}
                preload="auto"
                style={{ display: 'none' }}
            />

            {!showSecondContainer && (
                <div className="h-[100svh] flex flex-col items-center justify-center gap-3">
                    <FaSpinner className="animate-spin text-xl lg:text-2xl 2xl:text-3xl 
                                        text-white text-center"/>

                    <span className="text-base lg:text-xl 2xl:text-2xl 
                                text-white text-center select-none">
                        {accionApagadoInicio} el equipo
                    </span>
                </div>
            )}

            {showSecondContainer && (
                <div className="h-[100svh] flex flex-col items-center justify-center gap-3">
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
                                text-white text-center select-none">
                        Mentira <span translate="no">xD</span>
                    </p>

                    <span className="text-base lg:text-xl 2xl:text-2xl 
                                text-white text-center select-none">
                        No se ha {mentiraApagadoInicio}
                    </span>
                </div>
            )}
        </div>
    );
}