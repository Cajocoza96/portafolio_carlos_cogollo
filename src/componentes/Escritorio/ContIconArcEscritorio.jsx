import React, { useState, useEffect, useRef } from "react";
import Archivo from "./Archivos_accesos_directos/Archivo";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";
import { Rnd } from "react-rnd";
import useIsMobile from "../../hooks/useIsMobile";

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

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto3LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.texto3LinkEnlace}
                className="inline break-words text-sm
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto3LinkTextoEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto4LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.texto4LinkEnlace}
                className="inline break-words text-sm
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto4LinkEnlace}
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
    verAcercaDe,
    toggleMinimizarVentanaAcercaDe, ventanaMinimizadaAcercaDe,
    infoAcercaDe,

    toggleVerContacto,
    verContacto, 
    toggleMinimizarVentanaContacto, ventanaMinimizadaContacto,
    infoContacto,

    toggleVerHabilidades,
    verHabilidades, 
    toggleMinimizarVentanaHabilidades, ventanaMinimizadaHabilidades,
    infoHabilidades,

    toggleVerProyectos,
    verProyectos, 
    toggleMinimizarVentanaProyectos, ventanaMinimizadaProyectos,
    infoProyectos,

    bringToFront,
    getZIndex,
    hoveredVentana
}) {

    const isMobile = useIsMobile();
    const containerRef = useRef(null);
    const isInitialized = useRef(false);

    const draggingRef = useRef(false);
    const dragStartPos = useRef({ x: 0, y: 0, time: 0 });

    const ICON_WIDTH = 90;
    const ICON_HEIGHT = 74;
    const MARGIN = 5;

    const getDeviceAndOrientation = () => {
        const { width, height } = getContainerDimensions();
        const aspectRatio = width / height;
        
        // Detectar tipo de dispositivo
        const isMobileDevice = width < 768;
        const isTablet = width >= 768 && width < 1024;
        const isDesktop = width >= 1024;
        
        // Detectar orientación
        const isLandscape = aspectRatio > 1;
        const isPortrait = aspectRatio <= 1;
        
        return {
            isMobileDevice,
            isTablet,
            isDesktop,
            isLandscape,
            isPortrait,
            width,
            height
        };
    };

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
            height: window.innerHeight - 40 // Restamos la altura del bottom-10
        };
    };

    // Posicionar iconos en línea según el dispositivo
    const calculateLinePositions = () => {
        const device = getDeviceAndOrientation();
        const iconKeys = ['acercaDe', 'contacto', 'habilidades', 'proyectos'];
        const newPositions = {};

        if (device.isDesktop || (device.isTablet && device.isLandscape) || 
            (device.isMobileDevice && device.isLandscape)) {
            // LÍNEA HORIZONTAL para: Desktop, Tablet horizontal, Móvil horizontal
            const totalIconsWidth = iconKeys.length * ICON_WIDTH + (iconKeys.length - 1) * MARGIN;
            const startX = Math.max(MARGIN, (device.width - totalIconsWidth) / 2);
            const centerY = Math.max(MARGIN, (device.height - ICON_HEIGHT) / 2);

            iconKeys.forEach((iconId, index) => {
                newPositions[iconId] = {
                    x: startX + index * (ICON_WIDTH + MARGIN),
                    y: centerY
                };
            });

        } else if (device.isMobileDevice && device.isPortrait) {
            // LÍNEA VERTICAL para: Móvil vertical
            const totalIconsHeight = iconKeys.length * ICON_HEIGHT + (iconKeys.length - 1) * MARGIN;
            const centerX = Math.max(MARGIN, (device.width - ICON_WIDTH) / 2);
            const startY = Math.max(MARGIN, (device.height - totalIconsHeight) / 2);

            iconKeys.forEach((iconId, index) => {
                newPositions[iconId] = {
                    x: centerX,
                    y: startY + index * (ICON_HEIGHT + MARGIN)
                };
            });

        } else {
            // FALLBACK - Grid para casos especiales
            const iconsPerRow = Math.floor((device.width - MARGIN) / (ICON_WIDTH + MARGIN));
            
            iconKeys.forEach((iconId, index) => {
                const row = Math.floor(index / iconsPerRow);
                const col = index % iconsPerRow;

                newPositions[iconId] = {
                    x: MARGIN + col * (ICON_WIDTH + MARGIN),
                    y: MARGIN + row * (ICON_HEIGHT + MARGIN)
                };
            });
        }

        return newPositions;
    };

    const [iconPositions, setIconPositions] = useState(() => {
        return calculateLinePositions();
    });

    const smartRepositionIcons = () => {
        const { width, height } = getContainerDimensions();
        const maxX = width - ICON_WIDTH;
        const maxY = height - ICON_HEIGHT;

        // Recalcular posiciones en línea
        const newLinePositions = calculateLinePositions();

        setIconPositions(prevPositions => {
            const newPositions = { ...newLinePositions };
            const iconKeys = Object.keys(newPositions);

            // Validar límites
            iconKeys.forEach(iconId => {
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

            return newPositions;
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (isInitialized.current) {
                setTimeout(() => {
                    smartRepositionIcons();
                }, 150);
            }
        };

        if (!isInitialized.current) {
            isInitialized.current = true;
        }

        window.addEventListener('resize', handleResize);
        // También escuchar cambios de orientación
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [isMobile]);

    useEffect(() => {
        if (isInitialized.current) {
            setTimeout(() => {
                smartRepositionIcons();
            }, 150);
        }
    }, [isMobile]);

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

    const validatePositionBounds = (newPos) => {
        const { width, height } = getContainerDimensions();
        const maxX = width - ICON_WIDTH;
        const maxY = height - ICON_HEIGHT;

        return {
            x: Math.max(0, Math.min(newPos.x, maxX)),
            y: Math.max(0, Math.min(newPos.y, maxY))
        };
    };

    // Estados de ventana (sin cambios)
    const [ventanaStateAcercaDe, setVentanaStateAcercaDe] = useState(null);
    const handleVentanaStateChangeAcercaDe = (newState) => {
        setVentanaStateAcercaDe(newState);
    };

    const [ventanaStateContacto, setVentanaStateContacto] = useState(null);
    const handleVentanaStateChangeContacto = (newState) => {
        setVentanaStateContacto(newState);
    };

    const [ventanaStateHabilidades, setVentanaStateHabilidades] = useState(null);
    const handleVentanaStateChangeHabilidades = (newState) => {
        setVentanaStateHabilidades(newState);
    };

    const [ventanaStateProyectos, setVentanaStateProyectos] = useState(null);
    const handleVentanaStateChangeProyectos = (newState) => {
        setVentanaStateProyectos(newState);
    };

    // Handlers de click (sin cambios)
    const handleClickArchivoAcercaDe = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verAcercaDe && ventanaMinimizadaAcercaDe) {
            toggleMinimizarVentanaAcercaDe();
            bringToFront('acercaDe');
            return;
        } else if (verAcercaDe && !ventanaMinimizadaAcercaDe) {
            bringToFront('acercaDe');
            return;
        } else {
            toggleVerAcercaDe();
            setTimeout(() => {
                bringToFront('acercaDe');
            }, 0);
        }
    };

    const handleClickArchivoContacto = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verContacto && ventanaMinimizadaContacto) {
            toggleMinimizarVentanaContacto();
            bringToFront('contacto');
            return;
        } else if (verContacto && !ventanaMinimizadaContacto) {
            bringToFront('contacto');
            return;
        } else {
            toggleVerContacto();
            setTimeout(() => {
                bringToFront('contacto');
            }, 0);
        }
    };

    const handleClickArchivoHabilidades = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verHabilidades && ventanaMinimizadaHabilidades) {
            toggleMinimizarVentanaHabilidades();
            bringToFront('habilidades');
            return;
        } else if (verHabilidades && !ventanaMinimizadaHabilidades) {
            bringToFront('habilidades');
            return;
        } else {
            toggleVerHabilidades();
            setTimeout(() => {
                bringToFront('habilidades');
            }, 0);
        }
    };

    const handleClickArchivoProyectos = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verProyectos && ventanaMinimizadaProyectos) {
            toggleMinimizarVentanaProyectos();
            bringToFront('proyectos');
            return;
        } else if (verProyectos && !ventanaMinimizadaProyectos) {
            bringToFront('proyectos');
            return;
        } else {
            toggleVerProyectos();
            setTimeout(() => {
                bringToFront('proyectos');
            }, 0);
        }
    };

    const shouldBeTransparent = (ventanaType) => {
        return hoveredVentana && hoveredVentana !== ventanaType;
    };

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

    const handleDragStop = (iconId) => (e, d) => {
        const rawPos = { x: d.x, y: d.y };
        const boundedPos = validatePositionBounds(rawPos);

        if (checkCollision(iconId, boundedPos)) {
            setIconPositions((prev) => ({ ...prev }));
        } else {
            setIconPositions((prev) => ({ ...prev, [iconId]: boundedPos }));
        }

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