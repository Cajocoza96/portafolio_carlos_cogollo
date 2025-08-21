import React, { useState } from "react";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { HiWifi, HiVolumeUp, HiVolumeOff, HiOutlineQuestionMarkCircle, HiBan } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft, HiGlobeAlt } from "react-icons/hi2";
import {
    FaBatteryEmpty, FaBatteryQuarter, FaBatteryHalf,
    FaBatteryThreeQuarters, FaBatteryFull, FaChargingStation
} from "react-icons/fa";
import HoraFecha from "./Hora_y_fecha/HoraFecha";

import useConexionInternet from "../../hooks/useConexionInternet";

export default function EspacioDerechoMobile() {

    const { isOnline } = useConexionInternet();

    const [verEspacioDerechoMobile, setVerEspacioDerechoMobile] = useState(false);

    const toggleVerEspacioDerechoMobile = () => {
        setVerEspacioDerechoMobile(!verEspacioDerechoMobile);
    }

    return (
        <div className="w-full h-10 text-white
                        flex flex-row md:hidden items-center ">

            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                        active:bg-blue-600 dark:active:bg-gray-700
                                        w-full h-10 p-2 flex items-center justify-center
                                        text-base lg:text-xl 2xl:text-2xl" title="Sin Ayuda"
                onClick={toggleVerEspacioDerechoMobile}>
                {!verEspacioDerechoMobile ? <HiChevronUp /> : <HiChevronDown />}
            </div>

            {verEspacioDerechoMobile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={toggleVerEspacioDerechoMobile}>
                    <div className="bg-blue-800 dark:bg-gray-900 h-auto
                                    w-auto overflow-hidden
                                    absolute bottom-10 right-0 
                                    flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}>

                        <div className="h-[90%] w-[90%] overflow-hidden
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
                                                        text-sm lg:text-base 2xl:text-xl" title="No Disponible">
                                <div className="relative inline-block  text-xl 2xl:text-2xl">
                                    <FaBatteryEmpty />
                                    <HiBan className="absolute bottom-0 right-0 text-red-600 text-sm" />
                                </div>
                            </div>

                            <div className="hover:bg-blue-700 hover:dark:bg-gray-800
                                                        active:bg-blue-600 dark:active:bg-gray-700
                                                        w-full h-10 p-2 flex items-center justify-center
                                                        text-sm lg:text-base 2xl:text-xl" title="No Disponible">
                                <HiVolumeOff />
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


                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}