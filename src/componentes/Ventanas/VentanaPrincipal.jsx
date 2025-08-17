import React, { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { HiMinus, HiX } from "react-icons/hi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";
import infoBlocNotas from "../../data/infoBlocNotas.json";

import useIsMobile from "../../hooks/useIsMobile";

export default function VentanaPrincipal({ toggleVerArchivo }) {
    const mensajeBlocNotas = infoBlocNotas.textoBlocDeNotas;

    const isMobile = useIsMobile();
    const rndRef = useRef(null);

    const [isMaximized, setIsMaximized] = useState(false);
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

    const [previousState, setPreviousState] = useState(getInitialPosition());

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

    // Recentrar ventana cuando cambia isMobile o windowDimensions
    useEffect(() => {
        if (!isMaximized && rndRef.current) {
            const newPosition = getInitialPosition();
            rndRef.current.updatePosition({ x: newPosition.x, y: newPosition.y });
            rndRef.current.updateSize({ width: newPosition.width, height: newPosition.height });
        }
    }, [isMobile, windowDimensions.width, windowDimensions.height]);

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const handleDoubleClick = () => {
        toggleMaximize();
    };

    // Manejar eventos touch específicamente
    const handleTouchStart = (callback) => (e) => {
        e.stopPropagation();
        // Prevenir el comportamiento por defecto para evitar conflictos
        callback();
    };

    return (
        <Rnd
            ref={rndRef}
            default={getInitialPosition()}
            minWidth={300}
            minHeight={200}
            bounds="window"
            dragHandleClassName="drag-handle"
            disableDragging={isMaximized}
            enableResizing={!isMaximized}
            position={isMaximized ? { x: 0, y: 0 } : undefined}
            size={isMaximized ? {
                width: windowDimensions.width,
                height: windowDimensions.height - 40
            } : undefined}
            style={{
                border: '1px solid #d1d5db',
                backgroundColor: 'white',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                zIndex: 1000
            }}
            onDragStart={(e) => {
                document.body.style.userSelect = 'none';
            }}
            onDragStop={(e) => {
                document.body.style.userSelect = 'auto';
            }}
            onResizeStart={(e) => {
                document.body.style.userSelect = 'none';
            }}
            onResizeStop={(e) => {
                document.body.style.userSelect = 'auto';
            }}
        >
            <div className="w-full h-full flex flex-col">
                {/* Barra de título */}
                <div
                    className="drag-handle w-full flex flex-row items-center justify-between bg-gray-100 border-b border-gray-300 h-8 select-none"
                    onDoubleClick={handleDoubleClick}
                >
                    <div className="text-black ml-3 text-sm flex flex-row items-center gap-1">
                        <FaRegFileAlt />
                        <p>Acerca de.txt</p>
                    </div>

                    <div className="text-black text-sm flex flex-row items-center">
                        {/* Botón minimizar */}
                        <div
                            className="bg-white hover:bg-gray-300
                                        h-8 w-11 flex items-center justify-center touch-manipulation"
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={handleTouchStart(() => {})}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <HiMinus />
                        </div>

                        {/* Botón maximizar/restaurar */}
                        <div
                            className="bg-white hover:bg-gray-300 
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
                                <div className="h-3 w-3 border border-black"></div>
                            )}
                        </div>

                        {/* Botón cerrar */}
                        <div
                            className="bg-white text-black
                                        hover:bg-red-600 hover:text-white 
                                        h-8 w-11 flex items-center justify-center touch-manipulation"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleVerArchivo();
                            }}
                            onTouchStart={handleTouchStart(toggleVerArchivo)}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <HiX />
                        </div>
                    </div>
                </div>

                {/* Barra de menú */}
                <div className="ml-1 flex flex-row items-center select-none bg-white flex-shrink-0">
                    {['Archivo', 'Edición', 'Formato', 'Ver', 'Ayuda'].map((menu) => (
                        <div
                            key={menu}
                            className="hover:bg-gray-300 active:bg-gray-300 h-auto w-auto p-1 flex items-center justify-center touch-manipulation"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <p className="text-black text-sm">{menu}</p>
                        </div>
                    ))}
                </div>

                {/* Área de texto */}
                <div className="flex-1 p-2 cursor-text overflow-auto">
                    <span className="text-black text-sm whitespace-pre-wrap">
                        {mensajeBlocNotas.acercaDe}
                    </span>
                </div>
            </div>
        </Rnd>
    );
}