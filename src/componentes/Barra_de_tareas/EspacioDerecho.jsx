import React from "react";
import { HiWifi, HiVolumeUp, HiVolumeOff, HiOutlineQuestionMarkCircle, HiBan } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft, HiGlobeAlt } from "react-icons/hi2";
import {
    FaBatteryEmpty, FaBatteryQuarter, FaBatteryHalf,
    FaBatteryThreeQuarters, FaBatteryFull, FaChargingStation
} from "react-icons/fa";
import HoraFecha from "./Hora_y_fecha/HoraFecha";

import useConexionInternet from "../../hooks/useConexionInternet";

export default function EspacioDerecho() {

    const { isOnline } = useConexionInternet();

    return (
        <div className="w-full h-10 text-white hidden
                        md:flex flex-row items-center 
                        lg:justify-end
                        lg:col-span-1">

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title="Sin Ayuda">
                <HiOutlineQuestionMarkCircle />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title="No Disponible">
                <div className="relative inline-block  text-xl 2xl:text-2xl">
                    <FaBatteryEmpty />
                    <HiBan className="absolute bottom-0 right-0 text-red-600 text-sm" />
                </div>
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title="No Disponible">
                <HiVolumeOff />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title={isOnline ? "Conectado" : "Desconectado"}>
                {isOnline ? <HiWifi /> :
                    <div className="relative inline-block  text-xl 2xl:text-2xl">
                        <HiGlobeAlt />
                        <HiBan className="absolute bottom-0 right-0 text-red-600 text-sm" />
                    </div>
                }
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center">
                <HoraFecha />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title="Sin Notificaciones">
                <HiOutlineChatBubbleOvalLeft />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-1 flex items-center
                            text-sm lg:text-base 2xl:text-xl
                            border border-white">

            </div>
        </div>
    );
}