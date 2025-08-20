import React from "react";
import { HiDesktopComputer, HiSun, HiMoon } from "react-icons/hi";

export default function ConfiguracionTema({ toggleVerConfigTema }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={toggleVerConfigTema}>

            <div className="bg-blue-700 dark:bg-gray-700 h-auto overflow-hidden
                                w-[47%] 2xs:w-[30%] md:w-[25%] lg:w-[20%] 2xl:w-[15%]
                                absolute bottom-30 left-0 flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}>
                <div className="text-white w-full h-auto p-1 
                                flex flex-col items-center gap-2">

                    <div className="w-full flex flex-row items-center gap-2">
                        <HiDesktopComputer className="text-base lg:text-xl 2xl:text-2xl" />

                        <div className="flex flex-col select-none">
                            <p className="text-sm lg:text-base 2xl:text-xl">Elige tu tema</p>
                            <p className="text-xs lg:text-sm 2xl:text-base">Sistema (predeterminado)</p>
                        </div>

                    </div>

                    <div className="w-full flex flex-col ">
                        <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-full p-1 overflow-hidden select-none
                                text-xs lg:text-sm 2xl:text-base ">
                            <div className="flex flex-row items-center gap-2">
                                <HiSun />
                                <p>Luz</p>
                            </div>
                        </div>

                        <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-full p-1 overflow-hidden select-none
                                text-xs lg:text-sm 2xl:text-base">
                            <div className="flex flex-row items-center gap-2">
                                <HiMoon />
                                <p>Oscuro</p>
                            </div>
                        </div>

                        <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-full p-1 overflow-hidden select-none
                                text-xs lg:text-sm 2xl:text-base">
                            <div className="flex flex-row items-center gap-2">
                                <HiDesktopComputer />
                                <p>Sistema (predeterminado)</p>
                            </div>
                        </div>
                    </div>

                </div>




            </div>

        </div>
    );
}