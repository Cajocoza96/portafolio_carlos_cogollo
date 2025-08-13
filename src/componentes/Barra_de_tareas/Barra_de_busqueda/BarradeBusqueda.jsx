import React, { useRef, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import useIsMobile from "../../hooks/useIsMobile";

export default function BarradeBusqueda() {
    const inputRef = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (!isMobile) return;

        const handleFocus = () => {
            // Pequeño delay para asegurar que el teclado esté completamente visible
            setTimeout(() => {
                // Scroll hacia la parte inferior de la página
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }, 300); // Ajusta este tiempo si es necesario
        };

        const handleBlur = () => {
            // Opcional: volver arriba cuando se cierra el teclado
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        };

        const inputElement = inputRef.current;
        if (inputElement) {
            inputElement.addEventListener('focus', handleFocus);
            inputElement.addEventListener('blur', handleBlur);

            return () => {
                inputElement.removeEventListener('focus', handleFocus);
                inputElement.removeEventListener('blur', handleBlur);
            };
        }
    }, [isMobile]);

    return (
        <div className="bg-white dark:bg-gray-500 h-10 w-full
                        flex flex-row items-center justify-baseline gap-4 rounded-sm
                        text-black dark:text-white">
            <HiSearch className="ml-2 text-sm lg:text-xl 2xl:text-2xl"/>
            
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Escribe aquí para buscar."
                className="w-[80%]
                            placeholder:text-gray-500 dark:placeholder:text-gray-500
                            text-sm lg:text-base 2xl:text-xl
                            placeholder:text-sm lg:placeholder:text-base 2xl:placeholder:text-xl 
                            border-none focus:outline-none focus:ring-0"
            />
        </div>
    );
}