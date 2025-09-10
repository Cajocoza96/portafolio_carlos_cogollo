import React, { useState, useEffect, useMemo } from "react";

import { AnimatePresence } from "framer-motion";

import useIsMobile from "../../hooks/useIsMobile";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";

import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import infoBlocNotas from "../../data/infoBlocNotas.json";

import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

import VentanaInicio from "../Ventanas/Ventana_inicio/VentanaInicio";

import ContIconArcEscritorio from "./ContIconArcEscritorio";

import VistaApagadoInicio from "../Ventanas/Ventana_inicio/Opcion_usua_config_apagado/VistaApagadoInicio";

import VentanaBusqueda from "../Ventanas/Ventana_busqueda/VentanaBusqueda";

import ContEspacioDerechoMobile from "../Barra_de_tareas/ContEspacioDerechoMobile";

export default function Escritorio() {

    const isMobile = useIsMobile();

    const imageConfig = useMemo(() => {
        return {
            src: isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal,
            alt: isMobile ? "Bienvenido vista vertical" : "Bienvenido vista horizontal"
        };
    }, [isMobile]);

    const ventanaInicio = "ventanaInicio";

    const shouldBeTransparent = (ventanaType) => {
        return hoveredVentana && hoveredVentana !== ventanaType;
    };

    const [verEspacioDerechoMobile, setVerEspacioDerechoMobile] = useState(false);

    const toggleVerEspacioDerechoMobile = () => {
        setVerEspacioDerechoMobile(!verEspacioDerechoMobile);
    }

    const infoAcercaDe = infoBlocNotas.acercaDe;
    const infoContacto = infoBlocNotas.contacto;
    const infoHabilidades = infoBlocNotas.habilidades;
    const infoProyectos = infoBlocNotas.proyectos;

    const [zIndexCounter, setZIndexCounter] = useState(1000);
    const [ventanaZIndexes, setVentanaZIndexes] = useState({
        acercaDe: null,
        contacto: null,
        habilidades: null,
        proyectos: null
    });

    const bringToFront = (ventanaId) => {
        setZIndexCounter(prevCounter => {
            const newZIndex = prevCounter + 1;
            setVentanaZIndexes(prev => ({
                ...prev,
                [ventanaId]: newZIndex
            }));
            return newZIndex;
        });
    };

    const getZIndex = (ventanaId) => {
        if (ventanaZIndexes[ventanaId] === null) {
            return zIndexCounter;
        }
        return ventanaZIndexes[ventanaId];
    };

    const [hoveredVentana, setHoveredVentana] = useState(null);

    const handleHoverVentana = (ventanaType) => {
        setHoveredVentana(ventanaType);
    };

    const [verVentanaInicio, setVerVentanaInicio] = useState(false);

    const toggleVerVentanaInicio = () => {
        setVerVentanaInicio(!verVentanaInicio);
    }

    const [ventanaMinimizadaAcercaDe, setVentanaMinimizadaAcercaDe] = useState(false);

    const toggleMinimizarVentanaAcercaDe = () => {
        setVentanaMinimizadaAcercaDe(!ventanaMinimizadaAcercaDe);
    }

    const [ventanaMinimizadaContacto, setVentanaMinimizadaContacto] = useState(false);

    const toggleMinimizarVentanaContacto = () => {
        setVentanaMinimizadaContacto(!ventanaMinimizadaContacto);
    }

    const [ventanaMinimizadaHabilidades, setVentanaMinimizadaHabilidades] = useState(false);

    const toggleMinimizarVentanaHabilidades = () => {
        setVentanaMinimizadaHabilidades(!ventanaMinimizadaHabilidades);
    }

    const [ventanaMinimizadaProyectos, setVentanaMinimizadaProyectos] = useState(false);

    const toggleMinimizarVentanaProyectos = () => {
        setVentanaMinimizadaProyectos(!ventanaMinimizadaProyectos);
    }

    const [verAcercaDe, setVerAcercaDe] = useState(false);

    const toggleVerAcercaDe = () => {
        setVerAcercaDe(!verAcercaDe);
        if (verAcercaDe) {
            setVentanaMinimizadaAcercaDe(false);
        }
    }

    const [verContacto, setVerContacto] = useState(false);

    const toggleVerContacto = () => {
        setVerContacto(!verContacto);
        if (verContacto) {
            setVentanaMinimizadaContacto(false);
        }
    }

    const [verHabilidades, setVerHabilidades] = useState(false);

    const toggleVerHabilidades = () => {
        setVerHabilidades(!verHabilidades);
        if (verHabilidades) {
            setVentanaMinimizadaHabilidades(false);
        }
    }

    const [verProyectos, setVerProyectos] = useState(false);

    const toggleVerProyectos = () => {
        setVerProyectos(!verProyectos);
        if (verProyectos) {
            setVentanaMinimizadaProyectos(false);
        }
    }

    const [verVentanaBusqueda, setVerVentanaBusqueda] = useState(false);

    const toggleVerVentanaBusqueda = () => {
        setVerVentanaBusqueda(!verVentanaBusqueda);
    }

    const [userInteracted, setUserInteracted] = useState(false);

    const [verVentanaBloqueo, setVerVentanaBloqueo] = useState(false);

    const toggleVerVentanaBloqueo = () => {
        setVerVentanaBloqueo(!verVentanaBloqueo);
    }

    useEffect(() => {
        let timer;
        if (verVentanaBloqueo) {
            timer = setTimeout(() => {
                setVerVentanaBloqueo(false);
            }, 14000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaBloqueo]);

    const [verVentanaSuspendido, setVerVentanaSuspendido] = useState(false);

    const toggleVerVentanaSuspendido = () => {
        setVerVentanaSuspendido(!verVentanaSuspendido);
    }

    useEffect(() => {
        let timer;
        if (verVentanaSuspendido) {
            timer = setTimeout(() => {
                setVerVentanaSuspendido(false);
            }, 14000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaSuspendido]);

    const [verVentanaApagado, setVerVentanaApagado] = useState(false);

    const toggleVerVentanaApagado = () => {
        setVerVentanaApagado(!verVentanaApagado);
    }

    useEffect(() => {
        let timer;
        if (verVentanaApagado) {
            timer = setTimeout(() => {
                setVerVentanaApagado(false);
            }, 14000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaApagado]);

    const [verVentanaReinicio, setVerVentanaReinicio] = useState(false);

    const toggleVerVentanaReinicio = () => {
        setVerVentanaReinicio(!verVentanaReinicio);
    }

    useEffect(() => {
        let timer;
        if (verVentanaReinicio) {
            timer = setTimeout(() => {
                setVerVentanaReinicio(false);
            }, 14000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaReinicio]);

    useEffect(() => {
        const ventanasAbiertas = [];
        if (verAcercaDe && ventanaZIndexes.acercaDe === null) ventanasAbiertas.push('acercaDe');
        if (verContacto && ventanaZIndexes.contacto === null) ventanasAbiertas.push('contacto');
        if (verHabilidades && ventanaZIndexes.habilidades === null) ventanasAbiertas.push('habilidades');
        if (verProyectos && ventanaZIndexes.proyectos === null) ventanasAbiertas.push('proyectos');

        if (ventanasAbiertas.length > 0) {
            setZIndexCounter(prevCounter => {
                let newCounter = prevCounter;
                const newZIndexes = { ...ventanaZIndexes };

                ventanasAbiertas.forEach(ventanaId => {
                    newCounter += 1;
                    newZIndexes[ventanaId] = newCounter;
                });

                setVentanaZIndexes(newZIndexes);
                return newCounter;
            });
        }
    }, [verAcercaDe, verContacto, verHabilidades, verProyectos]);

    return (
        <>
            <OptimizedImage
                src={imageConfig.src}
                alt={imageConfig.alt}
                className="fixed inset-0 w-screen brightness-60 dark:brightness-50"
                asBackground={true}
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="100svh"
                showSkeleton={false}
                {...IMAGE_CONFIGS.CRITICAL}
            />
            <ContIconArcEscritorio
                toggleVerAcercaDe={toggleVerAcercaDe}
                verAcercaDe={verAcercaDe}
                setVerAcercaDe={setVerAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}
                infoAcercaDe={infoAcercaDe}

                toggleVerContacto={toggleVerContacto}
                verContacto={verContacto}
                setVerContacto={setVerContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                ventanaMinimizadaContacto={ventanaMinimizadaContacto}
                infoContacto={infoContacto}

                toggleVerHabilidades={toggleVerHabilidades}
                verHabilidades={verHabilidades}
                setVerHabilidades={setVerHabilidades}
                toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}
                infoHabilidades={infoHabilidades}

                toggleVerProyectos={toggleVerProyectos}
                verProyectos={verProyectos}
                setVerProyectos={setVerProyectos}
                toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}
                infoProyectos={infoProyectos}

                ventanaZIndexes={ventanaZIndexes}
                bringToFront={bringToFront}
                getZIndex={getZIndex}

                hoveredVentana={hoveredVentana}
            />

            <AnimatePresence>
                {verVentanaInicio && (
                    <VentanaInicio
                        toggleVerVentanaInicio={toggleVerVentanaInicio}
                        toggleVerVentanaBloqueo={toggleVerVentanaBloqueo}
                        toggleVerVentanaSuspendido={toggleVerVentanaSuspendido}
                        toggleVerVentanaApagado={toggleVerVentanaApagado}
                        toggleVerVentanaReinicio={toggleVerVentanaReinicio}

                        toggleVerAcercaDe={toggleVerAcercaDe}
                        verAcercaDe={verAcercaDe}
                        setVerAcercaDe={setVerAcercaDe}
                        toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                        ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}
                        infoAcercaDe={infoAcercaDe}

                        toggleVerContacto={toggleVerContacto}
                        verContacto={verContacto}
                        setVerContacto={setVerContacto}
                        toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                        ventanaMinimizadaContacto={ventanaMinimizadaContacto}
                        infoContacto={infoContacto}

                        toggleVerHabilidades={toggleVerHabilidades}
                        verHabilidades={verHabilidades}
                        setVerHabilidades={setVerHabilidades}
                        toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                        ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}
                        infoHabilidades={infoHabilidades}

                        toggleVerProyectos={toggleVerProyectos}
                        verProyectos={verProyectos}
                        setVerProyectos={setVerProyectos}
                        toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                        ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}
                        infoProyectos={infoProyectos}

                        setUserInteracted={setUserInteracted}

                        bringToFront={bringToFront}

                        isTransparent={shouldBeTransparent(ventanaInicio)}
                    />
                )}
            </AnimatePresence>

            {/*
            {verVentanaBusqueda && (
                <VentanaBusqueda 
                    toggleVerVentanaBusqueda={toggleVerVentanaBusqueda}
                />
            )}
            */}

            {verVentanaBloqueo && (
                <div className="bg-blue-700 w-screen min-h-[100svh]  
                        fixed inset-0 z-1000 touch-pan-x touch-pan-y">
                    <VistaApagadoInicio
                        accionApagadoInicio="Bloqueando"
                        mentiraApagadoInicio="bloqueado"
                        userInteracted={userInteracted}
                    />
                </div>
            )}

            {verVentanaSuspendido && (
                <div className="bg-blue-700 w-screen min-h-[100svh]  
                fixed inset-0 z-1000 touch-pan-x touch-pan-y">
                    <VistaApagadoInicio
                        accionApagadoInicio="Suspendiendo"
                        mentiraApagadoInicio="suspendido"
                        userInteracted={userInteracted}
                    />
                </div>
            )}

            {verVentanaApagado && (
                <div className="bg-blue-700 w-screen min-h-[100svh]  
                fixed inset-0 z-1000 touch-pan-x touch-pan-y">
                    <VistaApagadoInicio
                        accionApagadoInicio="Apagando"
                        mentiraApagadoInicio="apagado"
                        userInteracted={userInteracted}
                    />
                </div>
            )}

            {verVentanaReinicio && (
                <div className="bg-blue-700 w-screen min-h-[100svh]  
                fixed inset-0 z-1000 touch-pan-x touch-pan-y">
                    <VistaApagadoInicio
                        accionApagadoInicio="Reiniciando"
                        mentiraApagadoInicio="reiniciado"
                        userInteracted={userInteracted}
                    />
                </div>
            )}

            <BarraDeTareas
                toggleVerVentanaInicio={toggleVerVentanaInicio}
                toggleVerVentanaBusqueda={toggleVerVentanaBusqueda}

                verVentanaInicio={verVentanaInicio}
                setVerVentanaInicio={setVerVentanaInicio}

                verVentanaBusqueda={verVentanaBusqueda}
                setVerVentanaBusqueda={setVerVentanaBusqueda}

                verAcercaDe={verAcercaDe}
                toggleVerAcercaDe={toggleVerAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}
                infoAcercaDe={infoAcercaDe}

                verContacto={verContacto}
                toggleVerContacto={toggleVerContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                ventanaMinimizadaContacto={ventanaMinimizadaContacto}
                infoContacto={infoContacto}

                verHabilidades={verHabilidades}
                toggleVerHabilidades={toggleVerHabilidades}
                toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}
                infoHabilidades={infoHabilidades}

                verProyectos={verProyectos}
                toggleVerProyectos={toggleVerProyectos}
                toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}
                infoProyectos={infoProyectos}

                bringToFront={bringToFront}

                onHoverVentana={handleHoverVentana}

                verEspacioDerechoMobile={verEspacioDerechoMobile}
                setVerEspacioDerechoMobile={setVerEspacioDerechoMobile}
                toggleVerEspacioDerechoMobile={toggleVerEspacioDerechoMobile}
            />

            <ContEspacioDerechoMobile
                verAcercaDe={verAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}

                verContacto={verContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                ventanaMinimizadaContacto={ventanaMinimizadaContacto}

                verHabilidades={verHabilidades}
                toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}

                verProyectos={verProyectos}
                toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}

                verEspacioDerechoMobile={verEspacioDerechoMobile}
                toggleVerEspacioDerechoMobile={toggleVerEspacioDerechoMobile}
            />
        </>
    );
}