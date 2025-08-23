import React, { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { HiMinus, HiX } from "react-icons/hi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";


import useIsMobile from "../../hooks/useIsMobile";

export default function VentanaPrincipalContacto({ toggleVerContacto,
    ventanaStateContacto,
    handleVentanaStateChangeContacto, toggleMinimizarVentanaContacto,
    titulo, texto1, texto2, texto3LinkTexto, texto3LinkEnlace,
    zIndex,        // Nueva prop para el z-index
    onFocus        // Nueva prop para manejar el enfoque
    }) {

    const isMobile = useIsMobile();
    const rndRef = useRef(null);

    // Estado para las dimensiones en tiempo real durante el redimensionamiento
    const [currentDimensions, setCurrentDimensions] = useState({
        width: ventanaStateContacto?.width || (isMobile ? 300 : 600),
        height: ventanaStateContacto?.height || (isMobile ? 200 : 400)
    });

    const [isMaximized, setIsMaximized] = useState(ventanaStateContacto?.isMaximized || false);
    const [windowDimensions, setWindowDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Calcular posición centrada inicial
    const getInitialPosition = () => {
        const windowWidth = windowDimensions.width;
        const windowHeight = windowDimensions.height;

        const ventanaWidth = isMobile ? 300 : 600;
        const ventanaHeight = isMobile ? 200 : 400;

        return {
            x: Math.max(0, (windowWidth - ventanaWidth) / 2),
            y: Math.max(0, (windowHeight - ventanaHeight) / 2),
            width: ventanaWidth,
            height: ventanaHeight
        };
    };

    // Función para mantener la ventana dentro de los límites
    const keepWindowInBounds = (currentState) => {
        const { width: windowWidth, height: windowHeight } = windowDimensions;
        const { x, y, width, height } = currentState;

        // Calcular nueva posición asegurando que esté dentro de los límites
        const newX = Math.max(0, Math.min(x, windowWidth - width));
        const newY = Math.max(0, Math.min(y, windowHeight - height));

        // Ajustar tamaño si es necesario
        const maxWidth = windowWidth - newX;
        const maxHeight = windowHeight - newY;
        const newWidth = Math.min(width, maxWidth);
        const newHeight = Math.min(height, maxHeight);

        return {
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight
        };
    };

    // Inicializar con el estado guardado o posición inicial
    const [previousState, setPreviousState] = useState(() => {
        if (ventanaStateContacto && !ventanaStateContacto.isMaximized) {
            // Validar que el estado guardado esté dentro de los límites actuales
            const adjustedState = keepWindowInBounds(ventanaStateContacto);
            // Sincronizar currentDimensions con el estado inicial
            setCurrentDimensions({ width: adjustedState.width, height: adjustedState.height });
            return adjustedState;
        }
        const initialPosition = getInitialPosition();
        setCurrentDimensions({ width: initialPosition.width, height: initialPosition.height });
        return initialPosition;
    });

    // Actualizar dimensiones de ventana en tiempo real
    useEffect(() => {
        const updateDimensions = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Reajustar ventana cuando cambian las dimensiones o isMobile
    useEffect(() => {
        if (!isMaximized && rndRef.current) {
            // Si es cambio de orientación móvil, mantener la ventana en límites
            if (isMobile) {
                const currentState = {
                    x: previousState.x,
                    y: previousState.y,
                    width: Math.min(previousState.width, windowDimensions.width - 20), // Margen de seguridad
                    height: Math.min(previousState.height, windowDimensions.height - 60) // Margen para barra de tareas
                };

                const adjustedState = keepWindowInBounds(currentState);

                // Actualizar posición y tamaño de forma suave
                rndRef.current.updatePosition({ x: adjustedState.x, y: adjustedState.y });
                rndRef.current.updateSize({ width: adjustedState.width, height: adjustedState.height });

                // Actualizar estado interno y comunicar al padre
                setPreviousState(adjustedState);
                handleVentanaStateChangeContacto && handleVentanaStateChangeContacto({ ...adjustedState, isMaximized: false });
            } else {
                // En desktop, recentrar si la ventana está fuera de los límites
                const adjustedState = keepWindowInBounds(previousState);

                // Solo recentrar si la ventana está completamente fuera de vista
                if (adjustedState.x !== previousState.x || adjustedState.y !== previousState.y) {
                    rndRef.current.updatePosition({ x: adjustedState.x, y: adjustedState.y });
                    rndRef.current.updateSize({ width: adjustedState.width, height: adjustedState.height });
                    setPreviousState(adjustedState);
                    handleVentanaStateChangeContacto && handleVentanaStateChangeContacto({ ...adjustedState, isMaximized: false });
                }
            }
        }
    }, [isMobile, windowDimensions.width, windowDimensions.height, isMaximized]);

    const toggleMaximize = () => {
        if (!isMaximized) {
            // Antes de maximizar, guardar la posición y tamaño actual
            if (rndRef.current) {
                const rndElement = rndRef.current;
                const currentRect = rndElement.resizableElement.current.getBoundingClientRect();

                const newState = {
                    x: currentRect.left,
                    y: currentRect.top,
                    width: currentRect.width,
                    height: currentRect.height,
                    isMaximized: false
                };

                setPreviousState(newState);
                handleVentanaStateChangeContacto && handleVentanaStateChangeContacto({ ...newState, isMaximized: true });
            }
        }
        setIsMaximized(!isMaximized);

        // Comunicar el nuevo estado de maximización
        const currentState = !isMaximized ?
            { ...previousState, isMaximized: true } :
            { ...previousState, isMaximized: false };
            handleVentanaStateChangeContacto && handleVentanaStateChangeContacto(currentState);
    };

    const handleDoubleClick = () => {
        toggleMaximize();
    };

    // Función para minimizar la ventana
    const handleMinimize = () => {
        if (toggleMinimizarVentanaContacto) {
            toggleMinimizarVentanaContacto();
        }
    };

    // Función para cerrar y guardar estado
    const handleClose = () => {
        // Guardar el estado actual antes de cerrar
        if (rndRef.current) {
            let finalState;

            if (isMaximized) {
                // Si está maximizada, guardar el estado de maximización y el previousState
                finalState = { ...previousState, isMaximized: true };
            } else {
                // Si no está maximizada, guardar la posición y tamaño actual
                const rndElement = rndRef.current;
                const currentRect = rndElement.resizableElement.current.getBoundingClientRect();

                finalState = {
                    x: currentRect.left,
                    y: currentRect.top,
                    width: currentRect.width,
                    height: currentRect.height,
                    isMaximized: false
                };
            }

            handleVentanaStateChangeContacto && handleVentanaStateChangeContacto(finalState);
        }

        // Cerrar la ventana
        toggleVerContacto();
    };

    // Manejar eventos touch específicamente
    const handleTouchStart = (callback) => (e) => {
        e.stopPropagation();
        // Prevenir el comportamiento por defecto para evitar conflictos
        callback();
    };

    // Función para manejar el clic en cualquier parte de la ventana
    const handleWindowClick = (e) => {
        // Llamar a la función onFocus para traer la ventana al frente
        if (onFocus) {
            onFocus();
        }
    };

    return (
        <Rnd
            ref={rndRef}
            default={previousState}
            minWidth={isMobile ? 150 : 200}
            minHeight={32}
            bounds="window"
            dragHandleClassName="drag-handle"
            disableDragging={isMaximized}
            enableResizing={!isMaximized}
            position={isMaximized ? { x: 0, y: 0 } : previousState}
            size={isMaximized ? {
                width: windowDimensions.width,
                height: windowDimensions.height - 40
            } : previousState}
            style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                zIndex: zIndex || 1000  // Usar el z-index proporcionado
            }}
            onDragStart={(e) => {
                document.body.style.userSelect = 'none';
                // Traer al frente cuando comience el arrastre
                if (onFocus) onFocus();
            }}
            onDragStop={(e, data) => {
                document.body.style.userSelect = 'auto';
                // Actualizar previousState con la nueva posición asegurandose de que esté en límites
                if (!isMaximized) {
                    const newState = keepWindowInBounds({
                        ...previousState,
                        x: data.x,
                        y: data.y
                    });
                    setPreviousState(newState);
                    handleVentanaStateChangeContacto && handleVentanaStateChangeContacto({ ...newState, isMaximized: false });
                }
            }}
            onResizeStart={(e) => {
                document.body.style.userSelect = 'none';
                // Traer al frente cuando comience el redimensionado
                if (onFocus) onFocus();
            }}
            onResize={(e, direction, ref, delta, position) => {
                // Actualizar dimensiones en tiempo real durante el redimensionamiento
                setCurrentDimensions({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight
                });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                document.body.style.userSelect = 'auto';
                // Actualizar previousState con la nueva posición y tamaño asegurandose de que esté en límites
                if (!isMaximized) {
                    const newState = keepWindowInBounds({
                        x: position.x,
                        y: position.y,
                        width: ref.offsetWidth,
                        height: ref.offsetHeight
                    });
                    setPreviousState(newState);
                    setCurrentDimensions({ width: newState.width, height: newState.height });
                    handleVentanaStateChangeContacto && handleVentanaStateChangeContacto({ ...newState, isMaximized: false });
                }
            }}
        >
            <div 
                className="w-full h-full flex flex-col 
                            bg-white dark:bg-black border
                            border-black dark:border-white"
                onClick={handleWindowClick}  // Capturar clics en cualquier parte de la ventana
                onTouchStart={(e) => {
                    // Para dispositivos táctiles, también manejar el touch
                    handleWindowClick(e);
                }}
            >
                {/* Barra de título */}
                <div
                    className="overflow-hidden drag-handle w-full flex flex-row items-center justify-between h-8 select-none"
                    onDoubleClick={handleDoubleClick}>

                    <div className="text-black dark:text-white ml-3 text-sm flex flex-row items-center gap-1 overflow-hidden min-w-0 flex-1 pr-2" title={titulo}>
                        <FaRegFileAlt className="flex-shrink-0" />
                        <span className="truncate">{titulo}</span>
                    </div>

                    <div className="text-black dark:text-white text-sm flex flex-row items-center flex-shrink-0">
                        {/* Botón minimizar */}
                        <div
                            className="bg-white hover:bg-gray-300
                                        dark:bg-black dark:hover:bg-gray-800
                                        h-8 w-11 flex items-center justify-center touch-manipulation"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleMinimize();
                            }}
                            onTouchStart={handleTouchStart(handleMinimize)}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <HiMinus />
                        </div>

                        {/* Botón maximizar/restaurar */}
                        <div
                            className="bg-white hover:bg-gray-300 
                                        dark:bg-black dark:hover:bg-gray-800
                                        h-8 w-11 flex items-center justify-center touch-manipulation"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMaximize();
                            }}
                            onTouchStart={handleTouchStart(toggleMaximize)}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            {isMaximized ? (
                                <HiOutlineSquare2Stack className="h-3 w-3" />
                            ) : (
                                <div className="h-3 w-3 border border-black dark:border-white"></div>
                            )}
                        </div>

                        {/* Botón cerrar */}
                        <div
                            className="bg-white text-black
                                        dark:bg-black dark:text-white
                                        hover:bg-red-600 hover:text-white 
                                        h-8 w-11 flex items-center justify-center touch-manipulation"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                            }}
                            onTouchStart={handleTouchStart(handleClose)}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <HiX />
                        </div>
                    </div>
                </div>

                {/* Barra de menú - Solo visible si hay suficiente altura */}
                {(isMaximized ? windowDimensions.height : currentDimensions.height) > 60 && (
                    <div className="overflow-hidden ml-1 flex flex-row items-center select-none bg-white dark:bg-black flex-shrink-0">
                        {['Archivo', 'Edición', 'Formato', 'Ver', 'Ayuda'].map((menu) => (
                            <div
                                key={menu}
                                className="hover:bg-gray-300 active:bg-gray-300 
                                            dark:hover:bg-gray-800 dark:active:bg-gray-800 
                                            h-auto w-auto p-1 flex items-center justify-center touch-manipulation"
                                style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                                <p className="text-black dark:text-white text-sm">{menu}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Área de texto - Solo visible si hay suficiente altura */}
                {(isMaximized ? windowDimensions.height : currentDimensions.height) >
                    ((isMaximized ? windowDimensions.height : currentDimensions.height) > 60 ? 90 : 60) && (
                        <div className="flex-1 flex-col p-2 cursor-text overflow-auto">
                            <div className="mb-2">
                                <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                                    {texto1}
                                </p>
                            </div>

                            <div className="mb-2">
                                <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                                    {texto2}
                                </p>
                            </div>

                            <div className="mb-2">
                                <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                                    {texto3LinkTexto}
                                </p>
                            </div>

                            <div className="mb-2">
                                <a href={texto3LinkEnlace}
                                    className="text-black dark:text-white text-sm whitespace-pre-wrap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {texto3LinkEnlace}
                                </a>
                            </div>
                        </div>
                    )}
            </div>
        </Rnd>
    );
}