import React, { useState, useEffect, useMemo } from "react";

import useIsMobile from "../../hooks/useIsMobile";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import infoBlocNotas from "../../data/infoBlocNotas.json";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";
import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

import VentanaInicio from "../Ventanas/Ventana_inicio/VentanaInicio";

import ContIconArcEscritorio from "./ContIconArcEscritorio";

import VistaApagadoInicio from "../Ventanas/Ventana_inicio/Opcion_usua_config_apagado/VistaApagadoInicio";

import VentanaBusqueda from "../Ventanas/Ventana_busqueda/VentanaBusqueda";

export default function Escritorio() {
    const infoAcercaDe = infoBlocNotas.acercaDe;
    const infoContacto = infoBlocNotas.contacto;
    const infoHabilidades = infoBlocNotas.habilidades;

    const isMobile = useIsMobile();

    // Memoizar la configuración de la imagen para evitar recálculos innecesarios
    const imageConfig = useMemo(() => {
        return {
            src: isMobile ? windowsEscritorioVertical : windowsEscritorioHorizontal,
            alt: isMobile ? "Bienvenido vista vertical" : "Bienvenido vista horizontal"
        };
    }, [isMobile]);


    // Sistema de z-index dinámico para las ventanas - MOVIDO AQUÍ
    const [zIndexCounter, setZIndexCounter] = useState(1000);
    const [ventanaZIndexes, setVentanaZIndexes] = useState({
        acercaDe: 1000,
        contacto: 1001,
        habilidades: 1002
    });

    // Función para traer una ventana al frente - MOVIDO AQUÍ
    const bringToFront = (ventanaId) => {
        const newZIndex = zIndexCounter + 1;
        setZIndexCounter(newZIndex);
        setVentanaZIndexes(prev => ({
            ...prev,
            [ventanaId]: newZIndex
        }));
    };

    // Estado para manejar el hover en las miniaturas
    const [hoveredVentana, setHoveredVentana] = useState(null);

    // Función para manejar el hover desde EspacioCentro
    const handleHoverVentana = (ventanaType) => {
        setHoveredVentana(ventanaType);
    };

    const [verVentanaInicio, setVerVentanaInicio] = useState(false);

    const toggleVerVentanaInicio = () => {
        setVerVentanaInicio(!verVentanaInicio);
    }


    // Estado para controlar si la ventana está minimizada de Acerca de
    const [ventanaMinimizadaAcercaDe, setVentanaMinimizadaAcercaDe] = useState(false);

    // Nueva función para alternar el estado de minimización
    const toggleMinimizarVentanaAcercaDe = () => {
        setVentanaMinimizadaAcercaDe(!ventanaMinimizadaAcercaDe);
    }


    // Estado para controlar si la ventana está minimizada de Contacto
    const [ventanaMinimizadaContacto, setVentanaMinimizadaContacto] = useState(false);

    // Nueva función para alternar el estado de minimización
    const toggleMinimizarVentanaContacto = () => {
        setVentanaMinimizadaContacto(!ventanaMinimizadaContacto);
    }


    // Estado para controlar si la ventana está minimizada de Habilidades
    const [ventanaMinimizadaHabilidades, setVentanaMinimizadaHabilidades] = useState(false);

    // Nueva función para alternar el estado de minimización
    const toggleMinimizarVentanaHabilidades = () => {
        setVentanaMinimizadaHabilidades(!ventanaMinimizadaHabilidades);
    }


    //Estado para ver Acerca de.txt
    const [verAcercaDe, setVerAcercaDe] = useState(false);

    const toggleVerAcercaDe = () => {
        setVerAcercaDe(!verAcercaDe);
        // Resetear el estado de minimización cuando se cierra/abre la ventana
        if (verAcercaDe) {
            setVentanaMinimizadaAcercaDe(false);
        }
    }

    //Estado para ver Contacto.txt
    const [verContacto, setVerContacto] = useState(false);

    const toggleVerContacto = () => {
        setVerContacto(!verContacto);
        if (verContacto) {
            setVentanaMinimizadaContacto(false);
        }
    }


    //Estado para ver Habilidades.txt
    const [verHabilidades, setVerHabilidades] = useState(false);

    const toggleVerHabilidades = () => {
        setVerHabilidades(!verHabilidades);
        if (verHabilidades) {
            setVentanaMinimizadaHabilidades(false);
        }
    }

    const [verVentanaBusqueda, setVerVentanaBusqueda] = useState(false);

    const toggleVerVentanaBusqueda = () => {
        setVerVentanaBusqueda(!verVentanaBusqueda);
    }

    /*Estados para ventana de bloqueo, suspendido, apagado y reiniciando*/

    // Estado para controlar la interacción del usuario para el audio
    const [userInteracted, setUserInteracted] = useState(false);

    /*Estado para ver ventana de bloqueo*/
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

        //limpiar el timer cuando el componente se desmonte o cuando verVentanaBloqueo cambie
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaBloqueo]);

    /*Estado para ver ventana de suspendido*/
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

        //limpiar el timer cuando el componente se desmonte o cuando verVentanaBloqueo cambie
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaSuspendido]);

    /*Estado para ver ventana de apagado*/
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

        //limpiar el timer cuando el componente se desmonte o cuando verVentanaBloqueo cambie
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaApagado]);

    /*Estado para ver ventana de reinicio*/
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

        //limpiar el timer cuando el componente se desmonte o cuando verVentanaBloqueo cambie
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [verVentanaReinicio]);

    return (
        <>
            <div className="w-full">
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
            </div>

            <ContIconArcEscritorio
                toggleVerAcercaDe={toggleVerAcercaDe}
                verAcercaDe={verAcercaDe}
                setVerAcercaDe={setVerAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}

                toggleVerContacto={toggleVerContacto}
                verContacto={verContacto}
                setVerContacto={setVerContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                ventanaMinimizadaContacto={ventanaMinimizadaContacto}

                toggleVerHabilidades={toggleVerHabilidades}
                verHabilidades={verHabilidades}
                setVerHabilidades={setVerHabilidades}
                toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}

                // Pasar las funciones y estados de z-index
                ventanaZIndexes={ventanaZIndexes}
                bringToFront={bringToFront}

                hoveredVentana={hoveredVentana}
            />

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

                    toggleVerContacto={toggleVerContacto}
                    verContacto={verContacto}
                    setVerContacto={setVerContacto}
                    toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                    ventanaMinimizadaContacto={ventanaMinimizadaContacto}

                    toggleVerHabilidades={toggleVerHabilidades}
                    verHabilidades={verHabilidades}
                    setVerHabilidades={setVerHabilidades}
                    toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                    ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}

                    setUserInteracted={setUserInteracted}

                    // Pasar la función bringToFront para usar desde VentanaInicio
                    bringToFront={bringToFront}
                />
            )}

            {/*
            {verVentanaBusqueda && (
                <VentanaBusqueda 
                    toggleVerVentanaBusqueda={toggleVerVentanaBusqueda}
                />
            )}
            */}

            {/*Esto es para ver la ventana de bloqueo*/}
            {verVentanaBloqueo && (
                <VistaApagadoInicio
                    accionApagadoInicio="Bloqueando"
                    mentiraApagadoInicio="bloqueado"
                    userInteracted={userInteracted}
                />
            )}

            {/*Esto es para ver la ventana de suspendido*/}
            {verVentanaSuspendido && (
                <VistaApagadoInicio
                    accionApagadoInicio="Suspendiendo"
                    mentiraApagadoInicio="suspendido"
                    userInteracted={userInteracted}
                />
            )}

            {/*Esto es para ver la ventana de apagado*/}
            {verVentanaApagado && (
                <VistaApagadoInicio
                    accionApagadoInicio="Apagando"
                    mentiraApagadoInicio="apagado"
                    userInteracted={userInteracted}
                />
            )}

            {/*Esto es para ver la ventana de reinicio*/}
            {verVentanaReinicio && (
                <VistaApagadoInicio
                    accionApagadoInicio="Reiniciando"
                    mentiraApagadoInicio="reiniciado"
                    userInteracted={userInteracted}
                />
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

                bringToFront={bringToFront}

                onHoverVentana={handleHoverVentana}
            />
        </>
    );
}