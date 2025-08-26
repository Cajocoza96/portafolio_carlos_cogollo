import React, { useState, useRef, useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export default function EspacioCentro({
    verAcercaDe, verContacto,
    toggleMinimizarVentanaAcercaDe,
    toggleMinimizarVentanaContacto,
    // Nuevas props necesarias para las miniaturas
    toggleVerAcercaDe,
    toggleVerContacto,
    infoAcercaDe,
    infoContacto,

    ventanaMinimizadaAcercaDe, ventanaMinimizadaContacto, bringToFront,
    
    // Nueva prop para manejar el hover
    onHoverVentana
}) {
    const [showPreview, setShowPreview] = useState(false);
    const [hoveredVentana, setHoveredVentana] = useState(null);
    const previewRef = useRef(null);
    const iconRef = useRef(null);

    // Determinar si hay ventanas del bloc de notas abiertas
    const hayVentanasBlocNotas = verAcercaDe || verContacto;
    const numeroVentanas = (verAcercaDe ? 1 : 0) + (verContacto ? 1 : 0);

    const handleClickIconoBlocNotas = () => {
        if (numeroVentanas === 1) {
            // Si solo hay una ventana, comportamiento actual
            if (verAcercaDe && toggleMinimizarVentanaAcercaDe) {
                toggleMinimizarVentanaAcercaDe();
            } else if (verContacto && toggleMinimizarVentanaContacto) {
                toggleMinimizarVentanaContacto();
            }
        } else if (numeroVentanas > 0) {
            // Si hay múltiples ventanas, mostrar/ocultar preview
            setShowPreview(!showPreview);
        }
    };

    const handleMouseEnter = () => {
        if (numeroVentanas > 0) {
            setShowPreview(true);
        }
    };

    const handleMouseLeave = () => {
        // Pequeño delay para permitir que el usuario mueva el mouse a la preview
        setTimeout(() => {
            if (previewRef.current && !previewRef.current.matches(':hover') &&
                iconRef.current && !iconRef.current.matches(':hover')) {
                setShowPreview(false);
                setHoveredVentana(null);
                // Limpiar el hover cuando se sale de la preview
                if (onHoverVentana) {
                    onHoverVentana(null);
                }
            }
        }, 100);
    };

    const handlePreviewMouseLeave = () => {
        setShowPreview(false);
        setHoveredVentana(null);
        // Limpiar el hover cuando se sale de la preview
        if (onHoverVentana) {
            onHoverVentana(null);
        }
    };

    const handleSelectWindow = (tipo) => {
        if (tipo === 'acercaDe') {
            if (bringToFront) {
                bringToFront('acercaDe');
            }
            if (verAcercaDe && ventanaMinimizadaAcercaDe) {
                toggleMinimizarVentanaAcercaDe();
            }
        } else if (tipo === 'contacto') {
            if (bringToFront) {
                bringToFront('contacto');
            }
            if (verContacto && ventanaMinimizadaContacto) {
                toggleMinimizarVentanaContacto();
            }
        }
        setShowPreview(false);
        setHoveredVentana(null);
        // Limpiar el hover al seleccionar una ventana
        if (onHoverVentana) {
            onHoverVentana(null);
        }
    };

    const handleCloseWindow = (e, tipo) => {
        e.stopPropagation();
        if (tipo === 'acercaDe') {
            toggleVerAcercaDe();
        } else if (tipo === 'contacto') {
            toggleVerContacto();
        }
    };

    // Manejar hover sobre las miniaturas individuales
    const handleMiniatureHover = (ventanaType) => {
        setHoveredVentana(ventanaType);
        if (onHoverVentana) {
            onHoverVentana(ventanaType);
        }
    };

    const handleMiniatureLeave = () => {
        setHoveredVentana(null);
        if (onHoverVentana) {
            onHoverVentana(null);
        }
    };

    // Cerrar preview al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (previewRef.current && !previewRef.current.contains(event.target) &&
                iconRef.current && !iconRef.current.contains(event.target)) {
                setShowPreview(false);
                setHoveredVentana(null);
                if (onHoverVentana) {
                    onHoverVentana(null);
                }
            }
        };

        if (showPreview) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPreview]);

    if (!hayVentanasBlocNotas) {
        return (
            <div className="w-full h-10 text-white flex flex-row items-center lg:justify-start">
                {/* No hay ventanas del bloc de notas abiertas */}
            </div>
        );
    }

    return (
        <div className="w-full h-10 text-white flex flex-row items-center lg:justify-start relative">
            <div
                ref={iconRef}
                className={`hover:bg-blue-700 hover:dark:bg-gray-800
                            active:bg-blue-600 dark:active:bg-gray-700
                            ${numeroVentanas === 1 ? 'border-b-2 border-blue-300 dark:border-gray-300' : ''}
                            ${numeroVentanas > 1 ? 'border-b-2 custom-border-r border-blue-300 dark:border-gray-300' : ''}
                            h-10 w-12 p-1 flex items-center justify-center
                            text-sm lg:text-xl 2xl:text-2xl`}
                onClick={handleClickIconoBlocNotas}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <FaRegFileAlt />
            </div>

            {/* Vista previa de miniaturas */}
            {showPreview && numeroVentanas > 0 && (
                <div
                    ref={previewRef}
                    className="absolute 
                                bottom-10 right-0
                                bg-blue-700 dark:bg-gray-800 border select-none
                                border-blue-700 dark:border-gray-800 shadow-lg p-1 min-w-64 z-50"
                    onMouseLeave={handlePreviewMouseLeave}
                >
                    <div className={`grid 
                                    ${numeroVentanas === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}  gap-2`}>
                        {verAcercaDe && (
                            <div
                                className={`w-full rounded relative group transition-opacity duration-200 ${
                                    hoveredVentana && hoveredVentana !== 'acercaDe' ? 'opacity-50' : 'opacity-100'
                                }`}
                                onClick={() => handleSelectWindow('acercaDe')}
                                onMouseEnter={() => handleMiniatureHover('acercaDe')}
                                onMouseLeave={handleMiniatureLeave}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-full p-2 flex flex-row items-center justify-between">
                                        <div className="text-white flex flex-row items-center justify-center gap-2">
                                            <FaRegFileAlt className="text-sm" />
                                            <p className="text-sm font-medium truncate">
                                                {infoAcercaDe?.titulo || 'Acerca de.txt'}
                                            </p>
                                        </div>
                                        <button
                                            className="ml-2 p-1 text-white hover:bg-red-600
                                                    rounded transition-colors"
                                            onClick={(e) => handleCloseWindow(e, 'acercaDe')}>
                                            <HiX className="w-3 h-3 text-white" />
                                        </button>
                                    </div>
                                    <div className="w-full p-2 flex-1 min-w-0 bg-white dark:bg-black">
                                        <div className="text-sm text-black dark:text-white line-clamp-2">
                                            {infoAcercaDe?.texto1 || 'Contenido de acerca de...'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {verContacto && (
                            <div
                                className={`w-full rounded relative group transition-opacity duration-200 ${
                                    hoveredVentana && hoveredVentana !== 'contacto' ? 'opacity-50' : 'opacity-100'
                                }`}
                                onClick={() => handleSelectWindow('contacto')}
                                onMouseEnter={() => handleMiniatureHover('contacto')}
                                onMouseLeave={handleMiniatureLeave}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-full p-2 flex flex-row items-center justify-between">
                                        <div className="text-white flex flex-row items-center justify-center gap-2">
                                            <FaRegFileAlt className="text-sm" />
                                            <p className="text-sm font-medium truncate">
                                                {infoContacto?.titulo || 'Contacto.txt'}
                                            </p>
                                        </div>
                                        <button
                                            className="ml-2 p-1 text-white hover:bg-red-600
                                                rounded transition-colors"
                                            onClick={(e) => handleCloseWindow(e, 'contacto')}>
                                            <HiX className="w-3 h-3 text-white" />
                                        </button>
                                    </div>
                                    <div className="w-full p-2 flex-1 min-w-0 bg-white dark:bg-black">
                                        <div className="text-sm text-black dark:text-white line-clamp-2">
                                            {infoContacto?.texto1 || 'Información de contacto...'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}