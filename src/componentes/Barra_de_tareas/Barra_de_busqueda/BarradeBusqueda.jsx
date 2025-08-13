import React, { useRef, useEffect } from "react";
import { HiSearch } from "react-icons/hi";

export default function BarradeBusqueda(){
    const inputRef = useRef(null);

    const handleFocus = () => {
        // Esperar a que el teclado aparezca antes de hacer scroll
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                });
            }
        }, 300); // Ajusta este tiempo si es necesario
    };

    // Prevenir zoom en iOS cuando se hace focus en el input
    useEffect(() => {
        const preventZoom = (e) => {
            if (e.target.tagName === 'INPUT') {
                e.target.style.fontSize = '16px';
            }
        };

        document.addEventListener('touchstart', preventZoom, { passive: true });
        
        return () => {
            document.removeEventListener('touchstart', preventZoom);
        };
    }, []);

    return(
        <div className="bg-white dark:bg-gray-500 h-10 w-full
                        flex flex-row items-center justify-baseline gap-4 rounded-sm
                        text-black dark:text-white">
            <HiSearch className="ml-2 text-sm lg:text-xl 2xl:text-2xl"/>
            
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Escribe aquí para buscar."
                onFocus={handleFocus}
                className="w-[80%]
                            placeholder:text-gray-500 dark:placeholder:text-gray-500
                            text-base lg:text-base 2xl:text-xl
                            placeholder:text-base lg:placeholder:text-base 2xl:placeholder:text-xl 
                            border-none focus:outline-none focus:ring-0"
                style={{ fontSize: '16px' }} // Previene zoom en iOS
            />
        </div>
    );
}