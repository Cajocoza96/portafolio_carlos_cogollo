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
    infoContacto
}) {
    const [showPreview, setShowPreview] = useState(false);
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
        } else if (numeroVentanas > 1) {
            // Si hay múltiples ventanas, mostrar/ocultar preview
            setShowPreview(!showPreview);
        }
    };

    const handleMouseEnter = () => {
        if (numeroVentanas > 1) {
            setShowPreview(true);
        }
    };

    const handleMouseLeave = () => {
        // Pequeño delay para permitir que el usuario mueva el mouse a la preview
        setTimeout(() => {
            if (previewRef.current && !previewRef.current.matches(':hover') &&
                iconRef.current && !iconRef.current.matches(':hover')) {
                setShowPreview(false);
            }
        }, 100);
    };

    const handlePreviewMouseLeave = () => {
        setShowPreview(false);
    };

    const handleSelectWindow = (tipo) => {
        if (tipo === 'acercaDe') {
            if (toggleMinimizarVentanaAcercaDe) {
                toggleMinimizarVentanaAcercaDe();
            }
        } else if (tipo === 'contacto') {
            if (toggleMinimizarVentanaContacto) {
                toggleMinimizarVentanaContacto();
            }
        }
        setShowPreview(false);
    };

    const handleCloseWindow = (e, tipo) => {
        e.stopPropagation();
        if (tipo === 'acercaDe') {
            toggleVerAcercaDe();
        } else if (tipo === 'contacto') {
            toggleVerContacto();
        }
    };

    // Cerrar preview al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (previewRef.current && !previewRef.current.contains(event.target) &&
                iconRef.current && !iconRef.current.contains(event.target)) {
                setShowPreview(false);
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
                            text-sm lg:text-xl 2xl:text-2xl cursor-pointer`}
                onClick={handleClickIconoBlocNotas}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <FaRegFileAlt />
            </div>

            {/* Vista previa de miniaturas */}
            {showPreview && numeroVentanas > 1 && (
                <div
                    ref={previewRef}
                    className="absolute 
                                bottom-10 right-0
                                bg-blue-700 dark:bg-gray-800 border select-none
                                border-blue-700 dark:border-gray-800 shadow-lg p-1 min-w-64 z-50"
                    onMouseLeave={handlePreviewMouseLeave}
                >
                    <div className="grid grid-cols-2 gap-2">
                        {verAcercaDe && (
                            <div
                                className="w-full rounded relative group"
                                onClick={() => handleSelectWindow('acercaDe')}>
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
                                className="w-full rounded relative group"
                                onClick={() => handleSelectWindow('contacto')}>
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