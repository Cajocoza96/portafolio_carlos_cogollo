import React, { useState } from "react";
import Archivo from "./Archivos_accesos_directos/Archivo";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";
import infoBlocNotas from "../../data/infoBlocNotas.json";

// Componentes de contenido específico para cada ventana
const ContenidoAcercaDe = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto4}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto5}
            </p>
        </div>

        <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
            {data.texto6}
        </p>
    </>
);

const ContenidoContacto = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto3LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.texto3LinkEnlace}
                className="block break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto3LinkEnlace}
            </a>
        </div>
    </>
);

export default function ContIconArcEscritorio({
    toggleVerAcercaDe,
    verAcercaDe, setVerAcercaDe,
    toggleMinimizarVentanaAcercaDe, ventanaMinimizadaAcercaDe,

    toggleVerContacto,
    verContacto, setVerContacto,
    toggleMinimizarVentanaContacto, ventanaMinimizadaContacto,

    ventanaZIndexes,
    bringToFront,

    // Nueva prop para el hover
    hoveredVentana
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

    // Determinar si una ventana debe estar semitransparente
    const shouldBeTransparent = (ventanaType) => {
        // Si hay hover y esta ventana no es la que está siendo hovereada, debe estar semitransparente
        return hoveredVentana && hoveredVentana !== ventanaType;
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">

            {verAcercaDe && !ventanaMinimizadaAcercaDe && (
                <VentanaPrincipal
                    titulo={infoAcercaDe.titulo}
                    toggleVerVentana={toggleVerAcercaDe}
                    ventanaState={ventanaStateAcercaDe}
                    handleVentanaStateChange={handleVentanaStateChangeAcercaDe}
                    toggleMinimizarVentana={toggleMinimizarVentanaAcercaDe}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.acercaDe}
                    onFocus={() => bringToFront('acercaDe')}

                    // Prop para el efecto semitransparente
                    isTransparent={shouldBeTransparent('acercaDe')}

                    // Contenido específico
                    contenido={<ContenidoAcercaDe data={infoAcercaDe} />}
                />
            )}

            {verContacto && !ventanaMinimizadaContacto && (
                <VentanaPrincipal
                    titulo={infoContacto.titulo}
                    toggleVerVentana={toggleVerContacto}
                    ventanaState={ventanaStateContacto}
                    handleVentanaStateChange={handleVentanaStateChangeContacto}
                    toggleMinimizarVentana={toggleMinimizarVentanaContacto}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.contacto}
                    onFocus={() => bringToFront('contacto')}

                    // Prop para el efecto semitransparente
                    isTransparent={shouldBeTransparent('contacto')}

                    // Contenido específico
                    contenido={<ContenidoContacto data={infoContacto} />}
                />
            )}

            <Archivo
                onDoubleClick={handleClickArchivoAcercaDe}
                nombre={infoAcercaDe.titulo}
            />

            <Archivo
                onDoubleClick={handleClickArchivoContacto}
                nombre={infoContacto.titulo}
            />

        </div>
    );
}