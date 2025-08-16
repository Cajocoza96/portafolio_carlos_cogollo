import React from "react";

import { HiMinus, HiX } from "react-icons/hi";

/*Se puede colocar este icono cuando esta maximizado, es decir esta grande */
import { HiOutlineSquare2Stack } from "react-icons/hi2";

import { FaRegFileAlt } from "react-icons/fa";

import infoBlocNotas from "../../data/infoBlocNotas.json";

export default function VentanaPrincipal({ toggleVerArchivo }) {

    const mensajeBlocNotas = infoBlocNotas.textoBlocDeNotas;

    return (
        <div className="fixed bg-white overflow-hidden
                        w-[80%] lg:w-[40%] 2xl:w-[60%]
                        h-100 2xs:h-60 lg:h-120 2xl:h-160">

            <div className="w-full 
                            flex flex-row items-center justify-between">
                <div className="text-black dark:text-white ml-3
                            text-sm lg:text-base 2xl:text-xl
                            flex flex-row items-center gap-1 select-none">
                    <FaRegFileAlt />
                    <p>Acerca de.txt</p>
                </div>

                <div className="text-black dark:text-white
                            text-sm lg:text-base 2xl:text-xl
                            flex flex-row items-center">

                    <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-9 w-11 p-1 flex items-center justify-center">
                        <HiMinus />
                    </div>

                    <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-9 w-11 p-1 flex items-center justify-center">
                        <div className="h-3 w-3 border border-black"></div>
                    </div>

                    <div className="hover:bg-red-600 hover:text-white
                                    active:bg-red-600 active:text-white
                                        h-9 w-11 p-1 flex items-center justify-center"
                        onClick={toggleVerArchivo}>
                        <HiX />
                    </div>

                </div>
            </div>

            <div className="ml-1 flex flex-row items-center select-none">
                <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-auto w-auto p-1 flex items-center justify-center">
                    <p className="text-black dark:text-white
                            text-sm 2xl:text-base">Archivo</p>
                </div>
                <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-auto w-auto p-1 flex items-center justify-center">
                    <p className="text-black dark:text-white
                            text-sm 2xl:text-base">Edición</p>
                </div>
                <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-auto w-auto p-1 flex items-center justify-center">
                    <p className="text-black dark:text-white
                            text-sm 2xl:text-base">Formato</p>
                </div>
                <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-9 w-auto p-1 flex items-center justify-center">
                    <p className="text-black dark:text-white
                            text-sm 2xl:text-base">Ver</p>
                </div>
                <div className="hover:bg-gray-300 dark:hover:bg-gray-600
                                    active:bg-gray-300 dark:active:bg-gray-600
                                        h-auto w-auto p-1 flex items-center justify-center">
                    <p className="text-black dark:text-white
                            text-sm 2xl:text-base">Ayuda</p>
                </div>
            </div>

            <div className="w-[95%] h-full
                            ml-1 flex flex-wrap cursor-text">
                <span className="text-black dark:text-white
                            text-sm lg:text-base 2xl:text-xl">
                    {mensajeBlocNotas.acercaDe}
                </span>
            </div>

        </div>
    );
}