import React, { useState } from "react";
import { HiOutlineLockClosed, HiOutlineMoon, HiPower, HiOutlineArrowPath } from "react-icons/hi2";

export default function OpcionesApagado({ toggleVerOpcionesApagado }) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={toggleVerOpcionesApagado}>

            <div className="bg-blue-700 dark:bg-gray-700 h-auto 
                                w-[35%] 2xs:w-[30%] md:w-[25%] lg:w-[20%] 2xl:w-[15%]
                                absolute bottom-20 left-0">
                <div className="w-full h-full p-1">
                    <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-auto p-1 overflow-hidden select-none">
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiOutlineLockClosed className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Bloquear
                            </p>
                        </div>
                    </div>

                    <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-auto p-1 overflow-hidden select-none">
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiOutlineMoon className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Suspender
                            </p>
                        </div>
                    </div>

                    <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-auto p-1 overflow-hidden select-none">
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiPower className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Apagar
                            </p>
                        </div>
                    </div>

                    <div className="hover:bg-blue-500 dark:bg-gray-700
                                active:bg-blue-400 dark:active:bg-gray-600
                                h-auto w-auto p-1 overflow-hidden select-none">
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiOutlineArrowPath className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Reiniciar
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}