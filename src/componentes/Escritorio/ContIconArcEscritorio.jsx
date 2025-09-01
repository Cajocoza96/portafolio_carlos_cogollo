import React, { useState, useEffect, useRef } from "react";
import Archivo from "./Archivos_accesos_directos/Archivo";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";
import { Rnd } from "react-rnd";
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
                className="inline break-words text-sm
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto3LinkEnlace}
            </a>
        </div>
    </>
);

const ContenidoHabilidades = ({ data }) => (
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

        <div>
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto6}
            </p>
        </div>
    </>
);

const ContenidoProyectos = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto4}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto6}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto7}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto8}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto9LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item1.texto9LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item1.texto9LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto10LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item1.texto10LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item1.texto10LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto11LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.item1.texto11LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item1.texto11LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto4}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto6}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto7}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto8LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item2.texto8LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item2.texto8LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto9LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.item2.texto9LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item2.texto9LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto4}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto6LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item3.texto6LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item3.texto6LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto7LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.item3.texto7LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item3.texto7LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto4}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto6LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item4.texto6LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item4.texto6LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto7LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.item4.texto7LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item4.texto7LinkEnlace}
            </a>
        </div>
    </>
);

export default function ContIconArcEscritorio({
    toggleVerAcercaDe,
    verAcercaDe, setVerAcercaDe,
    toggleMinimizarVentanaAcercaDe, ventanaMinimizadaAcercaDe,
    infoAcercaDe,

    toggleVerContacto,
    verContacto, setVerContacto,
    toggleMinimizarVentanaContacto, ventanaMinimizadaContacto,
    infoContacto,

    toggleVerHabilidades,
    verHabilidades, setVerHabilidades,
    toggleMinimizarVentanaHabilidades, ventanaMinimizadaHabilidades,
    infoHabilidades,

    toggleVerProyectos,
    verProyectos, setVerProyectos,
    toggleMinimizarVentanaProyectos, ventanaMinimizadaProyectos,
    infoProyectos,

    ventanaZIndexes,
    bringToFront,
    getZIndex,

    // Nueva prop para el hover
    hoveredVentana
}) {

    const isMobile = useIsMobile();
    const containerRef = useRef(null);
    const isInitialized = useRef(false);

    // --- NUEVO: flag para diferenciar click vs drag (sirve mouse y touch)
    const draggingRef = useRef(false);
    const dragStartPos = useRef({ x: 0, y: 0, time: 0 });

    // Tamaño aproximado de cada icono (Archivo.jsx mide h-20 => 80px aprox)
    const ICON_WIDTH = 75;
    const ICON_HEIGHT = 72;
    const MARGIN = 12;

    // Función para obtener las dimensiones del contenedor
    const getContainerDimensions = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            return {
                width: rect.width,
                height: rect.height
            };
        }
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };

    // Estado para posiciones de cada icono - inicializado de forma inteligente
    const [iconPositions, setIconPositions] = useState(() => {
        // Calcular posiciones iniciales correctas desde el principio
        const initialWidth = window.innerWidth;
        const initialHeight = window.innerHeight;
        const initialIsMobile = initialWidth < 768; // Estimación inicial de móvil
        const iconKeys = ['acercaDe', 'contacto', 'habilidades', 'proyectos'];
        
        if (initialIsMobile) {
            // En móvil: organizar en grid
            const iconsPerRow = Math.floor((initialWidth - MARGIN) / (ICON_WIDTH + MARGIN));
            const newPositions = {};
            
            iconKeys.forEach((iconId, index) => {
                const row = Math.floor(index / iconsPerRow);
                const col = index % iconsPerRow;
                
                newPositions[iconId] = {
                    x: MARGIN + col * (ICON_WIDTH + MARGIN),
                    y: MARGIN + row * (ICON_HEIGHT + MARGIN)
                };
            });
            
            return newPositions;
        } else {
            // En desktop: organizar verticalmente
            const newPositions = {};
            
            iconKeys.forEach((iconId, index) => {
                newPositions[iconId] = {
                    x: MARGIN,
                    y: MARGIN + index * (ICON_HEIGHT + 10)
                };
            });
            
            return newPositions;
        }
    });

    // Función para preservar posiciones cuando sea posible
    const smartRepositionIcons = () => {
        const { width, height } = getContainerDimensions();
        const maxX = width - ICON_WIDTH;
        const maxY = height - ICON_HEIGHT;

        setIconPositions(prevPositions => {
            const newPositions = { ...prevPositions };
            const iconKeys = Object.keys(newPositions);
            
            // 1. Primero, intentar mantener posiciones actuales si caben
            iconKeys.forEach(iconId => {
                // Ajustar a límites si es necesario
                if (newPositions[iconId].x > maxX) {
                    newPositions[iconId].x = Math.max(0, maxX);
                }
                if (newPositions[iconId].y > maxY) {
                    newPositions[iconId].y = Math.max(0, maxY);
                }
                if (newPositions[iconId].x < 0) {
                    newPositions[iconId].x = 0;
                }
                if (newPositions[iconId].y < 0) {
                    newPositions[iconId].y = 0;
                }
            });

            // 2. Solo reorganizar automáticamente en móvil si hay colisiones masivas
            if (isMobile) {
                const hasMultipleCollisions = iconKeys.some((iconId, index) => {
                    return iconKeys.slice(index + 1).some(otherId => {
                        const pos1 = newPositions[iconId];
                        const pos2 = newPositions[otherId];
                        return !(
                            pos1.x + ICON_WIDTH < pos2.x ||
                            pos1.x > pos2.x + ICON_WIDTH ||
                            pos1.y + ICON_HEIGHT < pos2.y ||
                            pos1.y > pos2.y + ICON_HEIGHT
                        );
                    });
                });

                if (hasMultipleCollisions) {
                    // Solo aquí reorganizar automáticamente
                    const iconsPerRow = Math.floor((width - MARGIN) / (ICON_WIDTH + MARGIN));
                    iconKeys.forEach((iconId, index) => {
                        const row = Math.floor(index / iconsPerRow);
                        const col = index % iconsPerRow;
                        
                        newPositions[iconId] = {
                            x: MARGIN + col * (ICON_WIDTH + MARGIN),
                            y: MARGIN + row * (ICON_HEIGHT + MARGIN)
                        };
                    });
                }
            }

            return newPositions;
        });
    };

    // Effect para inicialización y cambios de orientación
    useEffect(() => {
        const handleResize = () => {
            // Solo manejar cambios de tamaño después de la inicialización
            if (isInitialized.current) {
                setTimeout(() => {
                    smartRepositionIcons();
                }, 150);
            }
        };

        // Marcar como inicializado inmediatamente
        if (!isInitialized.current) {
            isInitialized.current = true;
        }

        // Escuchar cambios de tamaño solo después de la inicialización
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]); // Re-ejecutar cuando cambie isMobile

    // Effect separado para manejar cambios de isMobile (orientación)
    useEffect(() => {
        if (isInitialized.current) {
            // Solo reposicionar si ya estamos inicializados y cambió el tipo de dispositivo
            setTimeout(() => {
                smartRepositionIcons();
            }, 150);
        }
    }, [isMobile]);

    // Función de colisión
    const checkCollision = (id, newPos) => {
        return Object.entries(iconPositions).some(([otherId, pos]) => {
            if (id === otherId) return false;
            return !(
                newPos.x + ICON_WIDTH < pos.x ||
                newPos.x > pos.x + ICON_WIDTH ||
                newPos.y + ICON_HEIGHT < pos.y ||
                newPos.y > pos.y + ICON_HEIGHT
            );
        });
    };

    // Función para validar que la posición esté dentro de los límites
    const validatePositionBounds = (newPos) => {
        const { width, height } = getContainerDimensions();
        const maxX = width - ICON_WIDTH;
        const maxY = height - ICON_HEIGHT;

        return {
            x: Math.max(0, Math.min(newPos.x, maxX)),
            y: Math.max(0, Math.min(newPos.y, maxY))
        };
    };

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

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Habilidades
    const [ventanaStateHabilidades, setVentanaStateHabilidades] = useState(null);

    // Función para actualizar el estado de la ventana Habilidades
    const handleVentanaStateChangeHabilidades = (newState) => {
        setVentanaStateHabilidades(newState);
    };

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Proyectos
    const [ventanaStateProyectos, setVentanaStateProyectos] = useState(null);

    // Función para actualizar el estado de la ventana Proyectos
    const handleVentanaStateChangeProyectos = (newState) => {
        setVentanaStateProyectos(newState);
    };

    const handleClickArchivoAcercaDe = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verAcercaDe && ventanaMinimizadaAcercaDe) {
            toggleMinimizarVentanaAcercaDe();
        } if (verAcercaDe) {
            bringToFront('acercaDe');
            return
        }
        else {
            toggleVerAcercaDe();
        }
    }

    const handleClickArchivoContacto = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verContacto && ventanaMinimizadaContacto) {
            toggleMinimizarVentanaContacto();
        } if (verContacto) {
            bringToFront('contacto');
            return
        }
        else {
            toggleVerContacto();
        }
    }

    const handleClickArchivoHabilidades = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verHabilidades && ventanaMinimizadaHabilidades) {
            toggleMinimizarVentanaHabilidades();
        } if (verHabilidades) {
            bringToFront('habilidades');
            return
        }
        else {
            toggleVerHabilidades();
        }
    }

    const handleClickArchivoProyectos = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verProyectos && ventanaMinimizadaProyectos) {
            toggleMinimizarVentanaProyectos();
        } if (verProyectos) {
            bringToFront('proyectos');
            return
        }
        else {
            toggleVerProyectos();
        }
    }

    // Determinar si una ventana debe estar semitransparente
    const shouldBeTransparent = (ventanaType) => {
        return hoveredVentana && hoveredVentana !== ventanaType;
    };

    // Helper para no repetir props de Rnd
    const rndCommon = {
        bounds: "parent",
        enableResizing: false,
        dragHandleClassName: "rnd-handle",
        onDragStart: (e, d) => {
            draggingRef.current = false;
            dragStartPos.current = {
                x: d.x,
                y: d.y,
                time: Date.now()
            };
        },
        onDrag: () => {
            draggingRef.current = true;
        },
        onDragStop: (e, d) => {
            const distX = Math.abs(d.x - dragStartPos.current.x);
            const distY = Math.abs(d.y - dragStartPos.current.y);
            const timeDiff = Date.now() - dragStartPos.current.time;

            if (distX < 5 && distY < 5 && timeDiff < 200) {
                draggingRef.current = false;
            }
        }
    };

    // Función mejorada para manejar drag stop con validación de límites
    const handleDragStop = (iconId) => (e, d) => {
        const rawPos = { x: d.x, y: d.y };
        const boundedPos = validatePositionBounds(rawPos);
        
        if (checkCollision(iconId, boundedPos)) {
            // Colisión → revertir
            setIconPositions((prev) => ({ ...prev }));
        } else {
            // Sin colisión → actualizar con posición validada
            setIconPositions((prev) => ({ ...prev, [iconId]: boundedPos }));
        }
        
        // Manejar el drag común
        const distX = Math.abs(d.x - dragStartPos.current.x);
        const distY = Math.abs(d.y - dragStartPos.current.y);
        const timeDiff = Date.now() - dragStartPos.current.time;

        if (distX < 5 && distY < 5 && timeDiff < 200) {
            draggingRef.current = false;
        }
    };

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 bottom-10 z-50 bg-black/20 flex items-center justify-center gap-2"
        >
            {verAcercaDe && !ventanaMinimizadaAcercaDe && (
                <VentanaPrincipal
                    titulo={infoAcercaDe.titulo}
                    toggleVerVentana={toggleVerAcercaDe}
                    ventanaState={ventanaStateAcercaDe}
                    handleVentanaStateChange={handleVentanaStateChangeAcercaDe}
                    toggleMinimizarVentana={toggleMinimizarVentanaAcercaDe}
                    zIndex={getZIndex('acercaDe')}
                    onFocus={() => bringToFront('acercaDe')}
                    isTransparent={shouldBeTransparent('acercaDe')}
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
                    zIndex={getZIndex('contacto')}
                    onFocus={() => bringToFront('contacto')}
                    isTransparent={shouldBeTransparent('contacto')}
                    contenido={<ContenidoContacto data={infoContacto} />}
                />
            )}

            {verHabilidades && !ventanaMinimizadaHabilidades && (
                <VentanaPrincipal
                    titulo={infoHabilidades.titulo}
                    toggleVerVentana={toggleVerHabilidades}
                    ventanaState={ventanaStateHabilidades}
                    handleVentanaStateChange={handleVentanaStateChangeHabilidades}
                    toggleMinimizarVentana={toggleMinimizarVentanaHabilidades}
                    zIndex={getZIndex('habilidades')}
                    onFocus={() => bringToFront('habilidades')}
                    isTransparent={shouldBeTransparent('habilidades')}
                    contenido={<ContenidoHabilidades data={infoHabilidades} />}
                />
            )}

            {verProyectos && !ventanaMinimizadaProyectos && (
                <VentanaPrincipal
                    titulo={infoProyectos.titulo}
                    toggleVerVentana={toggleVerProyectos}
                    ventanaState={ventanaStateProyectos}
                    handleVentanaStateChange={handleVentanaStateChangeProyectos}
                    toggleMinimizarVentana={toggleMinimizarVentanaProyectos}
                    zIndex={getZIndex('proyectos')}
                    onFocus={() => bringToFront('proyectos')}
                    isTransparent={shouldBeTransparent('proyectos')}
                    contenido={<ContenidoProyectos data={infoProyectos} />}
                />
            )}

            <Rnd
                {...rndCommon}
                position={iconPositions.acercaDe}
                onDragStop={handleDragStop("acercaDe")}
            >
                <Archivo
                    onDoubleClick={handleClickArchivoAcercaDe}
                    onTouchEnd={handleClickArchivoAcercaDe}
                    nombre={infoAcercaDe.titulo}
                />
            </Rnd>

            <Rnd
                {...rndCommon}
                position={iconPositions.contacto}
                onDragStop={handleDragStop("contacto")}
            >
                <Archivo
                    onDoubleClick={handleClickArchivoContacto}
                    onTouchEnd={handleClickArchivoContacto}
                    nombre={infoContacto.titulo}
                />
            </Rnd>

            <Rnd className="ml-1"
                {...rndCommon}
                position={iconPositions.habilidades}
                onDragStop={handleDragStop("habilidades")}
            >
                <Archivo
                    onDoubleClick={handleClickArchivoHabilidades}
                    onTouchEnd={handleClickArchivoHabilidades}
                    nombre={infoHabilidades.titulo}
                />
            </Rnd>

            <Rnd
                {...rndCommon}
                position={iconPositions.proyectos}
                onDragStop={handleDragStop("proyectos")}
            >
                <Archivo
                    onDoubleClick={handleClickArchivoProyectos}
                    onTouchEnd={handleClickArchivoProyectos}
                    nombre={infoProyectos.titulo}
                />
            </Rnd>
        </div>
    );
}