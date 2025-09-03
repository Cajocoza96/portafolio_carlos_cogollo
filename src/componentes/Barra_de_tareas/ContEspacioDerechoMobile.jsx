import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import { HiWifi, HiVolumeUp, HiOutlineQuestionMarkCircle, HiBan } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft, HiGlobeAlt } from "react-icons/hi2";
import { FaBatteryFull } from "react-icons/fa";
import HoraFecha from "./Hora_y_fecha/HoraFecha";

import useConexionInternet from "../../hooks/useConexionInternet";

export default function ContEspacioDerechoMobile({ verEspacioDerechoMobile,
    toggleVerEspacioDerechoMobile,
    
    verAcercaDe, toggleMinimizarVentanaAcercaDe, ventanaMinimizadaAcercaDe,
    verContacto, toggleMinimizarVentanaContacto, ventanaMinimizadaContacto,
    verHabilidades, toggleMinimizarVentanaHabilidades, ventanaMinimizadaHabilidades,
    verProyectos, toggleMinimizarVentanaProyectos, ventanaMinimizadaProyectos
}) {

    const { isOnline } = useConexionInternet();

    const handleClickArchivoAcercaDe = () => {
        if (verAcercaDe && !ventanaMinimizadaAcercaDe) {
            toggleMinimizarVentanaAcercaDe();
        }
    }

    const handleClickArchivoContacto = () => {
        if (verContacto && !ventanaMinimizadaContacto) {
            toggleMinimizarVentanaContacto();
        }
    }

    const handleClickArchivoHabilidades = () => {
        if (verHabilidades && !ventanaMinimizadaHabilidades) {
            toggleMinimizarVentanaHabilidades();
        }
    }

    const handleClickArchivoProyectos = () => {
        if (verProyectos && !ventanaMinimizadaProyectos) {
            toggleMinimizarVentanaProyectos();
        }
    }

    return (
        <AnimatePresence>
            {verEspacioDerechoMobile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center
                                md:relative md:inset-auto md:hidden"
                    onClick={toggleVerEspacioDerechoMobile}>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-blue-800 dark:bg-gray-900 h-auto
                                    w-auto overflow-hidden
                                    absolute bottom-10 right-0 
                                    flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}>

                        <div className="h-[90%] w-full overflow-hidden text-white
                                        flex flex-col items-center justify-center">
                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl" title="Sin Ayuda">
                                <HiOutlineQuestionMarkCircle />
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl" title="Bateria">
                                <div className="relative inline-block  text-xl 2xl:text-2xl">
                                    <FaBatteryFull />
                                </div>
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl" title="Volumen">
                                <HiVolumeUp />
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl" title={isOnline ? "Conectado" : "Desconectado"}>
                                {isOnline ? <HiWifi /> :
                                    <div className="relative inline-block  text-xl 2xl:text-2xl">
                                        <HiGlobeAlt />
                                        <HiBan className="absolute bottom-0 right-0 text-red-600 text-sm" />
                                    </div>
                                }
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl">
                                <HoraFecha />
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl" title="Sin Notificaciones">
                                <HiOutlineChatBubbleOvalLeft />
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                            active:bg-blue-600 dark:active:bg-gray-700
                            h-10 p-1 flex items-center
                            text-sm lg:text-base 2xl:text-xl
                            border border-white"
                                onClick={() => {
                                    handleClickArchivoAcercaDe()
                                    handleClickArchivoContacto()
                                    handleClickArchivoHabilidades()
                                    handleClickArchivoProyectos()
                                }}
                            >
                            </div>

                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}