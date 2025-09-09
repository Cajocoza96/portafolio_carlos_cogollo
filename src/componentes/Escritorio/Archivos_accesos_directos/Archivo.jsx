import React, { useRef } from "react";

import { FaRegFileAlt } from "react-icons/fa";

export default function Archivo({ nombre, onDoubleClick, onTouchEnd, handleClassName = "rnd-handle" }) {
    
    const touchRef = useRef({
        lastTouchTime: 0,
        touchCount: 0
    });

    const handleTouchEnd = (e) => {
        const currentTime = Date.now();
        const timeDiff = currentTime - touchRef.current.lastTouchTime;
        
        // Si el tiempo entre toques es menor a 300ms, incrementar contador
        if (timeDiff < 300) {
            touchRef.current.touchCount += 1;
        } else {
            // Si pasó mucho tiempo, reiniciar contador
            touchRef.current.touchCount = 1;
        }
        
        touchRef.current.lastTouchTime = currentTime;
        
        // Si es el segundo toque (doble toque), ejecutar la acción
        if (touchRef.current.touchCount === 2) {
            touchRef.current.touchCount = 0; // Reiniciar contador
            onTouchEnd?.(e);
        }
    };
    
    return (
        <div className={`${handleClassName} flex flex-col items-center justify-around
                        hover:outline hover:outline-gray-300
                        active:outline active:outline-gray-300
                        hover:bg-blue-300/30 active:bg-blue-300/30
                        dark:hover:bg-gray-300/30 dark:active:bg-gray-300/30
                            h-20 w-22 px-1 select-none`}
            onDoubleClick={onDoubleClick}
            onTouchEnd={handleTouchEnd}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClick?.(e);
            }}
        >
            <FaRegFileAlt className="text-xl lg:text-2xl text-white" />
            <p className="text-xs text-white text-center"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.75)" }}>
                {nombre}
            </p>
        </div>
    );
}