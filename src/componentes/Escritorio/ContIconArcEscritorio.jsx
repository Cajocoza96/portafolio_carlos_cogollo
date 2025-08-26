import React, { useState, useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import Archivo from "./Archivos_accesos_directos/Archivo";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";
import infoBlocNotas from "../../data/infoBlocNotas.json";
import useIsMobile from "../../hooks/useIsMobile";

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

    // Hook para detectar si es móvil
    const isMobile = useIsMobile();

    // Referencias para el contenedor
    const containerRef = useRef(null);

    // Estados para las posiciones de los archivos
    const [archivoAcercaDePosition, setArchivoAcercaDePosition] = useState({ x: 0, y: 0 });
    const [archivoContactoPosition, setArchivoContactoPosition] = useState({ x: 80, y: 0 });

    // Dimensiones del archivo (basado en las clases de Tailwind)
    const archivoWidth = 72; // w-18 = 72px
    const archivoHeight = 80; // h-20 = 80px

    // Función para obtener los límites del contenedor
    const getBounds = () => {
        if (!containerRef.current) return { left: 0, top: 0, right: 0, bottom: 0 };

        const rect = containerRef.current.getBoundingClientRect();
        return {
            left: 0,
            top: 0,
            right: rect.width - archivoWidth,
            bottom: rect.height - archivoHeight
        };
    };

    // Efecto para ajustar posiciones cuando cambia la orientación
    useEffect(() => {
        const adjustPositionsOnResize = () => {
            const bounds = getBounds();

            // Ajustar posición del archivo Acerca de si está fuera de límites
            setArchivoAcercaDePosition(prev => ({
                x: Math.min(Math.max(prev.x, bounds.left), bounds.right),
                y: Math.min(Math.max(prev.y, bounds.top), bounds.bottom)
            }));

            // Ajustar posición del archivo Contacto si está fuera de límites
            setArchivoContactoPosition(prev => ({
                x: Math.min(Math.max(prev.x, bounds.left), bounds.right),
                y: Math.min(Math.max(prev.y, bounds.top), bounds.bottom)
            }));
        };

        // Ajustar cuando cambie el tamaño de ventana
        window.addEventListener('resize', adjustPositionsOnResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', adjustPositionsOnResize);
        };
    }, [isMobile]);

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
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-black/20">

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

            <Rnd
                size={{ width: archivoWidth, height: archivoHeight }}
                position={archivoAcercaDePosition}
                onDragStop={(e, d) => {
                    setArchivoAcercaDePosition({ x: d.x, y: d.y });
                }}
                bounds="parent"
                enableResizing={false}
                dragHandleClassName="archivo-drag-handle"
            >
                <div className="archivo-drag-handle w-full h-full">
                    <Archivo
                        onDoubleClick={handleClickArchivoAcercaDe}
                        nombre={infoAcercaDe.titulo}
                    />
                </div>
            </Rnd>

            <Rnd
                size={{ width: archivoWidth, height: archivoHeight }}
                position={archivoContactoPosition}
                onDragStop={(e, d) => {
                    setArchivoContactoPosition({ x: d.x, y: d.y });
                }}
                bounds="parent"
                enableResizing={false}
                dragHandleClassName="archivo-drag-handle"
            >
                <div className="archivo-drag-handle w-full h-full">
                    <Archivo
                        onDoubleClick={handleClickArchivoContacto}
                        nombre={infoContacto.titulo}
                    />
                </div>
            </Rnd>

        </div>
    );
}