import React from "react";
import { FaWindows } from "react-icons/fa";
import BarradeBusqueda from "./Barra_de_busqueda/BarradeBusqueda";

export default function EspacioIzquierdo({ toggleVerVentanaInicio, toggleVerVentanaBusqueda,
                                            setVerVentanaBusqueda, verVentanaBusqueda,
                                            setVerVentanaInicio, verVentanaInicio,
                                            verEspacioDerechoMobile,
                                            toggleVerEspacioDerechoMobile
                                        }) {

    const handleClickVentanaInicioBusqueda = () => {
        if (verVentanaBusqueda) {
            setVerVentanaBusqueda(false);
        }

        if(verVentanaInicio || !verVentanaInicio){
            toggleVerVentanaInicio()
        }

        if(verVentanaInicio && verEspacioDerechoMobile){
            toggleVerEspacioDerechoMobile()
        }

        if(!verVentanaInicio && verEspacioDerechoMobile){
            toggleVerEspacioDerechoMobile()
        }
    }

    return (
        <div className="w-full h-10 text-white
                        flex flex-row items-center justify-start">

            <div className="h-10 w-12 p-1
                            hover:bg-blue-700 hover:dark:bg-gray-800
                            active:bg-blue-600 dark:active:bg-gray-700
                            hover:text-orange-700 dark:hover:text-blue-600
                            active:text-orange-600 dark:active:text-blue-500
                            flex items-center justify-center
                            text-sm lg:text-base 2xl:text-xl"
                onClick={handleClickVentanaInicioBusqueda}>
                <FaWindows />
            </div>

            <BarradeBusqueda
                toggleVerVentanaBusqueda={toggleVerVentanaBusqueda}
                setVerVentanaInicio={setVerVentanaInicio}
                verVentanaInicio={verVentanaInicio}
            />

        </div>
    );
}