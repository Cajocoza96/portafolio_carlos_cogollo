import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";

export default function BarradeBusqueda(){
    const inputRef = useRef(null);

    const handleFocus = () => {
        // Usar un timeout pequeño para asegurar que el DOM se actualice
        setTimeout(() => {
            if (inputRef.current) {
                // Scroll suave hacia la barra de tareas cuando el input obtiene foco
                const barraDetareas = document.querySelector('[data-testid="barra-de-tareas"]') 
                    || inputRef.current.closest('div[class*="bg-blue-700"]')
                    || inputRef.current.closest('div[class*="bg-black"]');
                
                if (barraDetareas) {
                    barraDetareas.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'end',
                        inline: 'nearest'
                    });
                }
            }
        }, 300); // Tiempo para que aparezca el teclado
    };

    const handleBlur = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return(
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
                            border-none focus:outline-none focus:ring-0
                            bg-transparent" // Añadir bg-transparent para mejor compatibilidad
                onFocus={handleFocus}
                onBlur={handleBlur}
                // Prevenir zoom en iOS
                style={{ fontSize: window.innerWidth < 768 ? '16px' : undefined }}
            />
        </div>
    );
}