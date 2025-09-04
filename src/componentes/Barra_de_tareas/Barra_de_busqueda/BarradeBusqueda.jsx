import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import useScrollVirtualKeyboard from "../../../hooks/useScrollVirtualKeyboard";

export default function BarradeBusqueda({ toggleVerVentanaBusqueda, 
                                            setVerVentanaInicio, verVentanaInicio }) {

    const inputRef = useRef(null);
    const { handleInputFocus } = useScrollVirtualKeyboard();

    const handleFocus = () => {
        handleInputFocus(inputRef.current);
    };

    const handleClickVentanaInicioBusqueda = () => {
        if(verVentanaInicio){
            setVerVentanaInicio(false);
        }

        toggleVerVentanaBusqueda()
    }

    return (
        <div className="bg-white dark:bg-gray-700 h-10 w-full
                        flex flex-row items-center justify-baseline gap-2 rounded-sm
                        text-black dark:text-white select-none">
            <HiSearch className="ml-2 text-sm lg:text-xl 2xl:text-2xl" />

            <input
                ref={inputRef}
                type="text"
                onClick={handleClickVentanaInicioBusqueda}
                placeholder="No es posible buscar."
                onFocus={handleFocus}
                disabled
                
                className="w-[80%]
                            placeholder:text-gray-500 dark:placeholder:text-gray-400
                            text-sm lg:text-base 2xl:text-xl truncate
                            placeholder:text-sm lg:placeholder:text-base 2xl:placeholder:text-xl 
                            border-none focus:outline-none focus:ring-0"/>
        </div>
    );
}
