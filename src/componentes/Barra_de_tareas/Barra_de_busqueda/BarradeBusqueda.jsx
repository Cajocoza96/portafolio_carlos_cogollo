import React from "react";
import { HiSearch } from "react-icons/hi";

export default function BarradeBusqueda(){
    return(
        <div className="bg-white dark:bg-gray-500 h-10 w-full
                        flex flex-row items-center justify-baseline gap-4 rounded-sm
                        text-black dark:text-white">
            <HiSearch className="ml-2 text-sm lg:text-xl 2xl:text-2xl"/>
            
            <input type="text" placeholder="Escribe aquí para buscar."
                className="w-[80%] bg-transparent
                            placeholder:text-gray-500 dark:placeholder:text-gray-500
                            text-sm lg:text-base 2xl:text-xl
                            placeholder:text-sm lg:placeholder:text-base 2xl:placeholder:text-xl 
                            border-none focus:outline-none focus:ring-0"
                inputMode="search" />
        </div>
    );
}