import React from "react";
import { FaWindows } from "react-icons/fa"
import { MdOutlineDashboard } from "react-icons/md";
import BarradeBusqueda from "./Barra_de_busqueda/BarradeBusqueda";

export default function EspacioIzquierdo({ toggleVerVentanaInicio }) {

    return (
        <div className="w-full h-10 text-white
                        flex flex-row items-center justify-center lg:justify-baseline">

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            hover:text-yellow-600 h-10 w-12 p-1
                            flex items-center justify-center
                            text-sm lg:text-base 2xl:text-xl"
                    onClick={toggleVerVentanaInicio}>
                <FaWindows />
            </div>

            <BarradeBusqueda/>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 w-12 p-1
                            flex items-center justify-center
                            text-sm lg:text-xl 2xl:text-2xl">
                <MdOutlineDashboard />
            </div>

        </div>
    );
}