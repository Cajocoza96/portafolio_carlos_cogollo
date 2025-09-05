import React, { useState} from "react";
import { Rnd } from "react-rnd";
import { HiMinus, HiX } from "react-icons/hi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";
import useVentanaPrincipal from "../../hooks/useVentanaPrincipal";

import { motion } from "framer-motion";

export default function VentanaPrincipal({ toggleVerVentana, ventanaState, handleVentanaStateChange,
    toggleMinimizarVentana, titulo, zIndex,
    onFocus, isTransparent, contenido }) {
    
    const [minimized, setMinimized] = useState(false);

    const { rndRef, currentDimensions, isMaximized, windowDimensions, previousState, isMobile,
        toggleMaximize, handleDoubleClick, handleMinimize: originalHandleMinimize, handleClose, handleTouchEnd,
        handleWindowClick, rndEvents } = useVentanaPrincipal({
            ventanaState,
            handleVentanaStateChange,
            toggleMinimizarVentana,
            toggleVerVentana
        });

    const handleMinimize = () => {
        setMinimized(true);
        setTimeout(() => {
            originalHandleMinimize();
            setMinimized(false);
        }, 600); 
    };

    const getOpacity = () => {
        if (minimized) return 0;
        return isTransparent ? 0.3 : 1;
    }

    return (
        <Rnd
            ref={rndRef}
            default={previousState}
            minWidth={isMobile ? 150 : 200}
            minHeight={32}
            bounds={isMaximized ? "window" : "parent"}
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
                zIndex: zIndex,
            }}
            onDragStart={(e) => rndEvents.onDragStart(e, onFocus)}
            onDragStop={rndEvents.onDragStop}
            onResizeStart={(e) => rndEvents.onResizeStart(e, onFocus)}
            onResize={rndEvents.onResize}
            onResizeStop={rndEvents.onResizeStop}
        >
            <motion.div
                animate={{
                    scale: minimized ? 0 : 1,       
                    opacity: getOpacity(),     
                    y: minimized ? 100 : 0          
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                
                className={`${isTransparent ? "opacity-30" : "opacity-100"} w-full h-full flex flex-col 
                                                bg-white dark:bg-black border
                                                border-black dark:border-white overflow-hidden`}
                onClick={(e) => handleWindowClick(e, onFocus)}
                onTouchEnd={(e) => {
                    handleWindowClick(e, onFocus);
                }}
            >
                <div className={`${isTransparent ? "invisible" : "visible"} flex flex-col h-full`}>
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
                                onTouchEnd={handleTouchEnd(handleMinimize)}
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
                                onTouchEnd={handleTouchEnd(toggleMaximize)}
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
                                onTouchEnd={handleTouchEnd(handleClose)}
                                style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                                <HiX />
                            </div>
                        </div>
                    </div>

                    {/* Barra de menú - Solo visible si hay suficiente altura */}
                    {(isMaximized ? windowDimensions.height : currentDimensions.height) > 60 && (
                        <div className="overflow-hidden ml-1 flex flex-row items-center select-none 
                                        bg-white dark:bg-black flex-shrink-0">
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

                    {/* Área de contenido - Solo visible si hay suficiente altura */}
                    {(isMaximized ? windowDimensions.height : currentDimensions.height) >
                        ((isMaximized ? windowDimensions.height : currentDimensions.height) > 60 ? 90 : 60) && (
                            <div className="flex flex-1 flex-col p-2 cursor-text overflow-y-auto overflow-x-hidden">
                                {contenido}
                            </div>
                        )}
                </div>
            </motion.div>
        </Rnd>
    );
}