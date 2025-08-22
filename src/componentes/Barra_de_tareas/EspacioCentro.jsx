import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

export default function EspacioCentro({ verAcercaDe, toggleMinimizarVentana }) {
    
    const handleClickIconoBarra = () => {
        if (verAcercaDe && toggleMinimizarVentana) {
            toggleMinimizarVentana();
        }
    };

    return (
        <div className="w-full h-10 text-white
                        flex flex-row items-center lg:justify-start">

            {verAcercaDe && (
                <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                active:bg-blue-600 dark:active:bg-gray-700
                                border-b-2 border-blue-300 dark:border-gray-300
                                h-10 w-12 p-1 flex items-center justify-center
                                text-sm lg:text-xl 2xl:text-2xl"
                    onClick={handleClickIconoBarra}>
                    <FaRegFileAlt />
                </div>
            )}

        </div>
    );
}