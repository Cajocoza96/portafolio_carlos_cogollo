import React from "react";
import { FaWindows } from "react-icons/fa";
import BarradeBusqueda from "./Barra_de_busqueda/BarradeBusqueda";

export default function EspacioIzquierdo({ toggleVerVentanaInicio }) {

    return (
        <div className="w-full h-10 text-white
                        flex flex-row items-center justify-start">

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            hover:text-yellow-600 h-10 w-12 p-1
                            active:text-yellow-500
                            flex items-center justify-center
                            text-sm lg:text-base 2xl:text-xl"
                    onClick={toggleVerVentanaInicio}>
                <FaWindows />
            </div>

            <BarradeBusqueda/>

        </div>
    );
}