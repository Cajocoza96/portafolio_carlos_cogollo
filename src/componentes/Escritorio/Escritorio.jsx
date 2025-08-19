import React, { useState, useEffect } from "react";

import useIsMobile from "../../hooks/useIsMobile";
import windowsEscritorioHorizontal from "/assets/img/escritorio/normal/windowsEscritorioHorizontal.webp";
import windowsEscritorioVertical from "/assets/img/escritorio/normal/windowsEscritorioVertical.webp";

import OptimizedImage, { IMAGE_CONFIGS } from "../common/OptimizedImage";
import BarraDeTareas from "../Barra_de_tareas/BarraDeTareas";

import VentanaInicio from "../Ventanas/Ventana_inicio/VentanaInicio";

import ContIconArcEscritorio from "./ContIconArcEscritorio";

import VistaApagadoInicio from "../Ventanas/Ventana_inicio/Opcion_usua_config_apagado/VistaApagadoInicio";

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
                    toggleVerVentanaBloqueo={toggleVerVentanaBloqueo}
                    toggleVerVentanaSuspendido={toggleVerVentanaSuspendido}
                    toggleVerVentanaApagado={toggleVerVentanaApagado}
                    toggleVerVentanaReinicio={toggleVerVentanaReinicio}
                    verArchivo={verArchivo}

                    setUserInteracted={setUserInteracted}

                />
            )}

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
                verArchivo={verArchivo}
            />
        </>
    );
}