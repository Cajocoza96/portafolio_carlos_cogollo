import { useState, useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";

export default function useVentanaPrincipal({ ventanaState, handleVentanaStateChange,
                                                toggleMinimizarVentana, toggleVerVentana }) {
    const isMobile = useIsMobile();
    const rndRef = useRef(null);

    // Estado para las dimensiones en tiempo real durante el redimensionamiento
    const [currentDimensions, setCurrentDimensions] = useState({
        width: ventanaState?.width || (isMobile ? 300 : 500),
        height: ventanaState?.height || (isMobile ? 200 : 300)
    });

    const [isMaximized, setIsMaximized] = useState(ventanaState?.isMaximized || false);
    const [windowDimensions, setWindowDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Calcular posición centrada inicial
    const getInitialPosition = () => {
        const windowWidth = windowDimensions.width;
        const windowHeight = windowDimensions.height;

        const ventanaWidth = isMobile ? 300 : 500;
        const ventanaHeight = isMobile ? 200 : 300;

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
        if (ventanaState && !ventanaState.isMaximized) {
            // Validar que el estado guardado esté dentro de los límites actuales
            const adjustedState = keepWindowInBounds(ventanaState);
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
                handleVentanaStateChange && handleVentanaStateChange({ ...adjustedState, isMaximized: false });
            } else {
                // En desktop, recentrar si la ventana está fuera de los límites
                const adjustedState = keepWindowInBounds(previousState);

                // Solo recentrar si la ventana está completamente fuera de vista
                if (adjustedState.x !== previousState.x || adjustedState.y !== previousState.y) {
                    rndRef.current.updatePosition({ x: adjustedState.x, y: adjustedState.y });
                    rndRef.current.updateSize({ width: adjustedState.width, height: adjustedState.height });
                    setPreviousState(adjustedState);
                    handleVentanaStateChange && handleVentanaStateChange({ ...adjustedState, isMaximized: false });
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
                handleVentanaStateChange && handleVentanaStateChange({ ...newState, isMaximized: true });
            }
        }
        setIsMaximized(!isMaximized);

        // Comunicar el nuevo estado de maximización
        const currentState = !isMaximized ?
            { ...previousState, isMaximized: true } :
            { ...previousState, isMaximized: false };
        handleVentanaStateChange && handleVentanaStateChange(currentState);
    };

    const handleDoubleClick = () => {
        toggleMaximize();
    };

    // Función para minimizar la ventana
    const handleMinimize = () => {
        if (toggleMinimizarVentana) {
            toggleMinimizarVentana();
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

            handleVentanaStateChange && handleVentanaStateChange(finalState);
        }

        // Cerrar la ventana
        toggleVerVentana();
    };

    // Manejar eventos touch específicamente - SOLUCION DEL PROBLEMA
    const handleTouchEnd = (callback) => (e) => {
        // Prevenir la propagación inmediatamente
        e.stopPropagation();
        
        // Crear un timeout pequeño para asegurar que solo se ejecute una vez
        setTimeout(() => {
            callback();
        }, 10);
    };

    // Función para manejar el clic en cualquier parte de la ventana
    const handleWindowClick = (e, onFocus) => {
        // Llamar a la función onFocus para traer la ventana al frente
        if (onFocus) {
            onFocus();
        }
    };

    // Configuración de eventos para Rnd
    const rndEvents = {
        onDragStart: (e, onFocus) => {
            document.body.style.userSelect = 'none';
            // Traer al frente cuando comience el arrastre
            if (onFocus) onFocus();
        },
        onDragStop: (e, data) => {
            document.body.style.userSelect = 'auto';
            // Actualizar previousState con la nueva posición asegurandose de que esté en límites
            if (!isMaximized) {
                const newState = keepWindowInBounds({
                    ...previousState,
                    x: data.x,
                    y: data.y
                });
                setPreviousState(newState);
                handleVentanaStateChange && handleVentanaStateChange({ ...newState, isMaximized: false });
            }
        },
        onResizeStart: (e, onFocus) => {
            document.body.style.userSelect = 'none';
            // Traer al frente cuando comience el redimensionado
            if (onFocus) onFocus();
        },
        onResize: (e, direction, ref, delta, position) => {
            // Actualizar dimensiones en tiempo real durante el redimensionamiento
            setCurrentDimensions({
                width: ref.offsetWidth,
                height: ref.offsetHeight
            });
        },
        onResizeStop: (e, direction, ref, delta, position) => {
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
                handleVentanaStateChange && handleVentanaStateChange({ ...newState, isMaximized: false });
            }
        }
    };

    return {
        rndRef,
        currentDimensions,
        isMaximized,
        windowDimensions,
        previousState,
        isMobile,
        toggleMaximize,
        handleDoubleClick,
        handleMinimize,
        handleClose,
        handleTouchEnd,
        handleWindowClick,
        rndEvents
    };
}