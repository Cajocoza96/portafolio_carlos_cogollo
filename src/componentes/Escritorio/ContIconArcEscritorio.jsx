import React, { useState } from "react";
import Archivo from "./Archivos_accesos_directos/Archivo";

import VentanaPrincipalAcercaDe from "../Ventanas/VentanaPrincipalAcercaDe";
import VentanaPrincipalContacto from "../Ventanas/VentanaPrincipalContacto";


import infoBlocNotas from "../../data/infoBlocNotas.json";

export default function ContIconArcEscritorio({
    toggleVerAcercaDe,
    verAcercaDe, setVerAcercaDe,
    toggleMinimizarVentanaAcercaDe, ventanaMinimizadaAcercaDe,

    toggleVerContacto,
    verContacto, setVerContacto,
    toggleMinimizarVentanaContacto, ventanaMinimizadaContacto

    }) {

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Acerca de
    const [ventanaStateAcercaDe, setVentanaStateAcercaDe] = useState(null);

    // Función para actualizar el estado de la ventana Acerca de
    const handleVentanaStateChangeAcercaDe = (newState) => {
        setVentanaStateAcercaDe(newState);
    };


    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Contacto
    const [ventanaStateContacto, setVentanaStateContacto] = useState(null);

    // Función para actualizar el estado de la ventana Contacto
    const handleVentanaStateChangeContacto = (newState) => {
        setVentanaStateContacto(newState);
    };


    // Sistema de z-index dinámico para las ventanas
    const [zIndexCounter, setZIndexCounter] = useState(1000);
    const [ventanaZIndexes, setVentanaZIndexes] = useState({
        acercaDe: 1000,
        contacto: 1001
    });

    // Función para traer una ventana al frente
    const bringToFront = (ventanaId) => {
        const newZIndex = zIndexCounter + 1;
        setZIndexCounter(newZIndex);
        setVentanaZIndexes(prev => ({
            ...prev,
            [ventanaId]: newZIndex
        }));
    };

    const infoAcercaDe = infoBlocNotas.acercaDe;
    const infoContacto = infoBlocNotas.contacto;


    const handleClickArchivoAcercaDe = () => {
        if (verAcercaDe && ventanaMinimizadaAcercaDe) {
            toggleMinimizarVentanaAcercaDe();
        } if (verAcercaDe) {
            return
        }
        else {
            toggleVerAcercaDe();
        }
    }


    const handleClickArchivoContacto = () => {
        if (verContacto && ventanaMinimizadaContacto) {
            toggleMinimizarVentanaContacto();
        } if (verContacto) {
            return
        }
        else {
            toggleVerContacto();
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">

            {verAcercaDe && !ventanaMinimizadaAcercaDe && (
                <VentanaPrincipalAcercaDe
                    titulo={infoAcercaDe.titulo}
                    texto1={infoAcercaDe.texto1}
                    texto2={infoAcercaDe.texto2}
                    texto3={infoAcercaDe.texto3}
                    texto4={infoAcercaDe.texto4}

                    toggleVerAcercaDe={toggleVerAcercaDe}
                    ventanaStateAcercaDe={ventanaStateAcercaDe}
                    handleVentanaStateChangeAcercaDe={handleVentanaStateChangeAcercaDe}
                    toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.acercaDe}
                    onFocus={() => bringToFront('acercaDe')}
                />
            )}

            {verContacto && !ventanaMinimizadaContacto && (
                <VentanaPrincipalContacto
                    titulo={infoContacto.titulo}
                    texto1={infoContacto.texto1}
                    texto2={infoContacto.texto2}
                    texto3LinkTexto={infoContacto.texto3LinkTexto}
                    texto3LinkEnlace={infoContacto.texto3LinkEnlace}

                    toggleVerContacto={toggleVerContacto}
                    ventanaStateContacto={ventanaStateContacto}
                    handleVentanaStateChangeContacto={handleVentanaStateChangeContacto}
                    toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.contacto}
                    onFocus={() => bringToFront('contacto')}
                />
            )}

            <Archivo
                onClick={handleClickArchivoAcercaDe}
                nombre={infoAcercaDe.titulo}
            />

            <Archivo
                onClick={handleClickArchivoContacto}
                nombre={infoContacto.titulo}
            />


        </div>
    );
}