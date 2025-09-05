import React from "react";
import { HiOutlineLockClosed, HiOutlineMoon, HiPower, HiOutlineArrowPath } from "react-icons/hi2";

import { motion } from "framer-motion";

export default function OpcionesApagado({ toggleVerOpcionesApagado, 
                                            toggleVerVentanaBloqueo, toggleVerVentanaSuspendido,
                                            toggleVerVentanaApagado, toggleVerVentanaReinicio,
                                            setUserInteracted}) {

    const handleBloquearClick = () => {
        setUserInteracted(true);
        toggleVerVentanaBloqueo();
    };

    const handleSuspenderClick = () => {
        setUserInteracted(true);
        toggleVerVentanaSuspendido();
    };

    const handleApagarClick = () => {
        setUserInteracted(true);
        toggleVerVentanaApagado();
    };

    const handleReiniciarClick = () => {
        setUserInteracted(true);
        toggleVerVentanaReinicio();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={toggleVerOpcionesApagado}>

            <div className="bg-blue-800 dark:bg-gray-900 h-auto 
                            w-[35%] 2xs:w-[30%] md:w-[25%] lg:w-[20%] 2xl:w-[15%]
                            absolute bottom-20 left-0">
                <div className="w-full h-full p-1">
                    <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                    active:bg-blue-600 dark:active:bg-gray-700
                                    h-auto w-auto p-1 overflow-hidden select-none"
                        onClick={handleBloquearClick}>
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiOutlineLockClosed className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Bloquear
                            </p>
                        </div>
                    </div>
                    {/**/}

                    <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                    active:bg-blue-600 dark:active:bg-gray-700
                                    h-auto w-auto p-1 overflow-hidden select-none"
                        onClick={handleSuspenderClick}>
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiOutlineMoon className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Suspender
                            </p>
                        </div>
                    </div>

                    <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                    active:bg-blue-600 dark:active:bg-gray-700
                                    h-auto w-auto p-1 overflow-hidden select-none"
                        onClick={handleApagarClick}>
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiPower className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Apagar
                            </p>
                        </div>
                    </div>

                    <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                    active:bg-blue-600 dark:active:bg-gray-700
                                    h-auto w-auto p-1 overflow-hidden select-none"
                        onClick={handleReiniciarClick}>
                        <div className="text-white flex flex-row items-center gap-2">
                            <HiOutlineArrowPath className="text-base lg:text-xl 2xl:text-2xl" />
                            <p className="text-xs lg:text-sm 2xl:text-base">
                                Reiniciar
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </motion.div>
    );
}