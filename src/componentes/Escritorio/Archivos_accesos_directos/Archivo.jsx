import React, { useRef } from "react";

import { FaRegFileAlt } from "react-icons/fa";

export default function Archivo({ nombre, onDoubleClick }) {
    const clickTimeoutRef = useRef(null);
    const clickCountRef = useRef(0);

    const handleClick = () => {
        clickCountRef.current += 1;

        if (clickCountRef.current === 1) {
            // Primer click, iniciamos el temporizador
            clickTimeoutRef.current = setTimeout(() => {
                // Si solo hubo un click, no hacemos nada (click simple)
                clickCountRef.current = 0;
            }, 300); // 300ms para detectar doble click
        } else if (clickCountRef.current === 2) {
            // Segundo click, es un doble click
            clearTimeout(clickTimeoutRef.current);
            clickCountRef.current = 0;
            if (onDoubleClick) {
                onDoubleClick();
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-around
                        hover:border hover:border-gray-300
                        active:border active:border-gray-300
                        hover:bg-blue-300/30 active:bg-blue-300/30
                        dark:hover:bg-gray-300/30 dark:active:bg-gray-300/30
                            h-20 w-18 py-1 select-none"
            onClick={handleClick}
            onDoubleClick={onDoubleClick}>
            <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl text-white" />
            <p className="text-xs 2xl:text-base text-white text-center"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.75)" }}>
                {nombre}
            </p>
        </div>
    );
}