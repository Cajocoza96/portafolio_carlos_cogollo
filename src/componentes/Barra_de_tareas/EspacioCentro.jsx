import React, { useState, useRef, useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";

export default function EspacioCentro({
    verVentanaInicio, toggleVerVentanaInicio,

    verAcercaDe, toggleMinimizarVentanaAcercaDe,
    toggleVerAcercaDe, infoAcercaDe, ventanaMinimizadaAcercaDe,

    verContacto, toggleMinimizarVentanaContacto,
    toggleVerContacto, infoContacto, ventanaMinimizadaContacto,

    verHabilidades, toggleMinimizarVentanaHabilidades,
    toggleVerHabilidades, infoHabilidades, ventanaMinimizadaHabilidades,

    verProyectos, toggleMinimizarVentanaProyectos,
    toggleVerProyectos, infoProyectos, ventanaMinimizadaProyectos,

    bringToFront,

    onHoverVentana
}) {
    const [showPreview, setShowPreview] = useState(false);
    const [hoveredVentana, setHoveredVentana] = useState(null);
    const previewRef = useRef(null);
    const iconRef = useRef(null);
    const timeoutRef = useRef(null);

    const hayVentanasBlocNotas = verAcercaDe || verContacto || verHabilidades || verProyectos;
    const numeroVentanas = (verAcercaDe ? 1 : 0) + (verContacto ? 1 : 0) + (verHabilidades ? 1 : 0) + (verProyectos ? 1 : 0);

    const getPreviewClasses = () => {
        return 'w-max max-w-50 max-w-screen-lg '; 
    };

    const handleClickIconoBlocNotas = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (numeroVentanas === 1) {
            if (!verVentanaInicio && verAcercaDe && toggleMinimizarVentanaAcercaDe) {
                toggleMinimizarVentanaAcercaDe();

            } else if (!verVentanaInicio && verContacto && toggleMinimizarVentanaContacto) {
                toggleMinimizarVentanaContacto();

            } else if (!verVentanaInicio && verHabilidades && toggleMinimizarVentanaHabilidades) {
                toggleMinimizarVentanaHabilidades();

            } else if (!verVentanaInicio && verProyectos && toggleMinimizarVentanaProyectos) {
                toggleMinimizarVentanaProyectos();
            }

            if (verVentanaInicio && !ventanaMinimizadaAcercaDe) {
                toggleVerVentanaInicio();

            } else if (verVentanaInicio && !ventanaMinimizadaContacto) {
                toggleVerVentanaInicio();

            } else if (verVentanaInicio && !ventanaMinimizadaHabilidades) {
                toggleVerVentanaInicio();

            } else if (verVentanaInicio && !ventanaMinimizadaProyectos) {
                toggleVerVentanaInicio();
            }

            if (verVentanaInicio && verAcercaDe && ventanaMinimizadaAcercaDe) {
                toggleVerVentanaInicio();
                toggleMinimizarVentanaAcercaDe();

            } else if (verVentanaInicio && verContacto && ventanaMinimizadaContacto) {
                toggleVerVentanaInicio();
                toggleMinimizarVentanaContacto();

            } else if (verVentanaInicio && verHabilidades && ventanaMinimizadaHabilidades) {
                toggleVerVentanaInicio();
                toggleMinimizarVentanaHabilidades();

            } else if (verVentanaInicio && verProyectos && ventanaMinimizadaProyectos) {
                toggleVerVentanaInicio();
                toggleMinimizarVentanaProyectos();
            }


        } else if (numeroVentanas >= 1) {
            setShowPreview(!showPreview);
        }
    };

    const handleMouseEnter = () => {
        if (numeroVentanas >= 1) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                setShowPreview(true);
                timeoutRef.current = null;
            }, 2000);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setTimeout(() => {
            if (previewRef.current && !previewRef.current.matches(':hover') &&
                iconRef.current && !iconRef.current.matches(':hover')) {
                setShowPreview(false);
                setHoveredVentana(null);
                if (onHoverVentana) {
                    onHoverVentana(null);
                }
            }
        }, 100);
    };

    const handlePreviewMouseLeave = () => {
        setShowPreview(false);
        setHoveredVentana(null);
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
            if(verVentanaInicio){
                toggleVerVentanaInicio();
            }
        } else if (tipo === 'contacto') {
            if (bringToFront) {
                bringToFront('contacto');
            }
            if (verContacto && ventanaMinimizadaContacto) {
                toggleMinimizarVentanaContacto();
            }
            if(verVentanaInicio){
                toggleVerVentanaInicio();
            }
        } else if (tipo === 'habilidades') {
            if (bringToFront) {
                bringToFront('habilidades');
            }
            if (verHabilidades && ventanaMinimizadaHabilidades) {
                toggleMinimizarVentanaHabilidades();
            }
            if(verVentanaInicio){
                toggleVerVentanaInicio();
            }
        } else if (tipo === 'proyectos') {
            if (bringToFront) {
                bringToFront('proyectos');
            }
            if (verProyectos && ventanaMinimizadaProyectos) {
                toggleMinimizarVentanaProyectos();
            }
            if(verVentanaInicio){
                toggleVerVentanaInicio();
            }
        }
        setShowPreview(false);
        setHoveredVentana(null);
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
        } else if (tipo === 'habilidades') {
            toggleVerHabilidades();
        } else if (tipo === 'proyectos') {
            toggleVerProyectos();
        }

        setShowPreview(false);
        setHoveredVentana(null);
        if (onHoverVentana) {
            onHoverVentana(null);
        }
    };

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

    useEffect(() => {
        if (numeroVentanas === 0) {
            setShowPreview(false);
            setHoveredVentana(null);
            if (onHoverVentana) {
                onHoverVentana(null);
            }
        }
    }, [numeroVentanas, onHoverVentana]);

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

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    if (!hayVentanasBlocNotas) {
        return (
            <div className="w-full h-10 text-white flex flex-row items-center lg:justify-start">
                {/* No hay ventanas del bloc de notas abiertas */}
            </div>
        );
    }

    return (
        <div className="w-full h-10 text-white flex flex-row items-center lg:justify-start">
            <div
                ref={iconRef}
                className={`relative
                            ${(verAcercaDe && !ventanaMinimizadaAcercaDe)
                        || (verContacto && !ventanaMinimizadaContacto)
                        || (verHabilidades && !ventanaMinimizadaHabilidades)
                        || (verProyectos && !ventanaMinimizadaProyectos) ? "bg-blue-700 dark:bg-gray-700 hover:bg-blue-500 hover:dark:bg-gray-500" : "hover:bg-blue-600 hover:dark:bg-gray-600"}

                            active:bg-blue-800 dark:active:bg-gray-800
                            ${numeroVentanas === 1 ? 'border-b-2 border-blue-300 dark:border-gray-300' : ''}
                            ${numeroVentanas > 1 ? 'border-b-2 custom-border-r border-blue-300 dark:border-gray-300' : ''}
                            h-10 w-12 p-1 flex items-center justify-center
                            text-sm lg:text-xl 2xl:text-2xl`}
                onClick={handleClickIconoBlocNotas}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <FaRegFileAlt />


                {/* Vista previa de miniaturas */}
                <AnimatePresence>
                    {showPreview && numeroVentanas >= 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            ref={previewRef}
                            className={`absolute 
                                bottom-10 right-0 lg:right-auto
                                bg-blue-700 dark:bg-gray-800 border select-none overflow-hidden
                                border-blue-700 dark:border-gray-800 shadow-lg p-2 z-50
                                ${getPreviewClasses()}`}
                            onMouseLeave={handlePreviewMouseLeave}
                        >
                            <div className={`grid ${numeroVentanas === 1 ? 'grid-cols-1 lg:grid-cols-1' : numeroVentanas === 2 ? 'grid-cols-1 lg:grid-cols-2' : numeroVentanas === 3 ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 lg:grid-cols-4'} 
                                    gap-3 h-full`}>
                                {verAcercaDe && (
                                    <div
                                        className={`w-30 lg:w-40 rounded relative group transition-opacity duration-200 ${hoveredVentana && hoveredVentana !== 'acercaDe' ? 'opacity-50' : 'opacity-100'
                                            }`}
                                        onClick={() => handleSelectWindow('acercaDe')}
                                        onMouseEnter={() => handleMiniatureHover('acercaDe')}
                                        onMouseLeave={handleMiniatureLeave}
                                    >
                                        <div className="w-full flex flex-col items-center h-full">
                                            <div className="w-full p-2 flex flex-row items-center justify-between">
                                                <div className="text-white flex flex-row items-center justify-center gap-2 flex-1 min-w-0">
                                                    <FaRegFileAlt className="text-sm flex-shrink-0" />
                                                    <p className="text-sm font-medium truncate">
                                                        {infoAcercaDe?.titulo || 'Acerca de.txt'}
                                                    </p>
                                                </div>
                                                <button
                                                    className="ml-2 p-1 text-white hover:bg-red-600
                                                    rounded transition-colors flex-shrink-0"
                                                    onClick={(e) => handleCloseWindow(e, 'acercaDe')}>
                                                    <HiX className="w-3 h-3 text-white" />
                                                </button>
                                            </div>
                                            <div className="w-full p-2 flex-1 bg-white dark:bg-black">
                                                <div className="text-sm text-black dark:text-white line-clamp-3">
                                                    {infoAcercaDe?.texto1 || 'Contenido de acerca de...'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {verContacto && (
                                    <div
                                        className={`w-30 lg:w-40 rounded relative group transition-opacity duration-200 ${hoveredVentana && hoveredVentana !== 'contacto' ? 'opacity-50' : 'opacity-100'
                                            }`}
                                        onClick={() => handleSelectWindow('contacto')}
                                        onMouseEnter={() => handleMiniatureHover('contacto')}
                                        onMouseLeave={handleMiniatureLeave}
                                    >
                                        <div className="w-full flex flex-col items-center h-full">
                                            <div className="w-full p-2 flex flex-row items-center justify-between">
                                                <div className="text-white flex flex-row items-center justify-center gap-2 flex-1 min-w-0">
                                                    <FaRegFileAlt className="text-sm flex-shrink-0" />
                                                    <p className="text-sm font-medium truncate">
                                                        {infoContacto?.titulo || 'Contacto.txt'}
                                                    </p>
                                                </div>
                                                <button
                                                    className="ml-2 p-1 text-white hover:bg-red-600
                                                rounded transition-colors flex-shrink-0"
                                                    onClick={(e) => handleCloseWindow(e, 'contacto')}>
                                                    <HiX className="w-3 h-3 text-white" />
                                                </button>
                                            </div>
                                            <div className="w-full p-2 flex-1 bg-white dark:bg-black">
                                                <div className="text-sm text-black dark:text-white line-clamp-3">
                                                    {infoContacto?.texto1 || 'Información de contacto...'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {verHabilidades && (
                                    <div
                                        className={`w-30 lg:w-40 rounded relative group transition-opacity duration-200 ${hoveredVentana && hoveredVentana !== 'habilidades' ? 'opacity-50' : 'opacity-100'
                                            }`}
                                        onClick={() => handleSelectWindow('habilidades')}
                                        onMouseEnter={() => handleMiniatureHover('habilidades')}
                                        onMouseLeave={handleMiniatureLeave}
                                    >
                                        <div className="w-full flex flex-col items-center h-full">
                                            <div className="w-full p-2 flex flex-row items-center justify-between">
                                                <div className="text-white flex flex-row items-center justify-center gap-2 flex-1 min-w-0">
                                                    <FaRegFileAlt className="text-sm flex-shrink-0" />
                                                    <p className="text-sm font-medium truncate">
                                                        {infoHabilidades?.titulo || 'Habilidades.txt'}
                                                    </p>
                                                </div>
                                                <button
                                                    className="ml-2 p-1 text-white hover:bg-red-600
                                                rounded transition-colors flex-shrink-0"
                                                    onClick={(e) => handleCloseWindow(e, 'habilidades')}>
                                                    <HiX className="w-3 h-3 text-white" />
                                                </button>
                                            </div>
                                            <div className="w-full p-2 flex-1 bg-white dark:bg-black">
                                                <div className="text-sm text-black dark:text-white line-clamp-3">
                                                    {infoHabilidades?.texto1 || 'Mis habilidades...'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {verProyectos && (
                                    <div
                                        className={`w-30 lg:w-40 rounded relative group transition-opacity duration-200 ${hoveredVentana && hoveredVentana !== 'proyectos' ? 'opacity-50' : 'opacity-100'
                                            }`}
                                        onClick={() => handleSelectWindow('proyectos')}
                                        onMouseEnter={() => handleMiniatureHover('proyectos')}
                                        onMouseLeave={handleMiniatureLeave}
                                    >
                                        <div className="w-full flex flex-col items-center h-full">
                                            <div className="w-full p-2 flex flex-row items-center justify-between">
                                                <div className="text-white flex flex-row items-center justify-center gap-2 flex-1 min-w-0">
                                                    <FaRegFileAlt className="text-sm flex-shrink-0" />
                                                    <p className="text-sm font-medium truncate">
                                                        {infoProyectos?.titulo || 'Proyectos.txt'}
                                                    </p>
                                                </div>
                                                <button
                                                    className="ml-2 p-1 text-white hover:bg-red-600
                                                rounded transition-colors flex-shrink-0"
                                                    onClick={(e) => handleCloseWindow(e, 'proyectos')}>
                                                    <HiX className="w-3 h-3 text-white" />
                                                </button>
                                            </div>
                                            <div className="w-full p-2 flex-1 bg-white dark:bg-black">
                                                <div className="text-sm text-black dark:text-white line-clamp-3">
                                                    {infoProyectos?.texto1 || 'Mis proyectos...'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}