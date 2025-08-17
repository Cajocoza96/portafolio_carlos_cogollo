import React from "react";
import { HiWifi, HiVolumeUp, HiVolumeOff, HiOutlineQuestionMarkCircle, HiBan } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft, HiGlobeAlt } from "react-icons/hi2";
import {
    FaBatteryEmpty, FaBatteryQuarter, FaBatteryHalf,
    FaBatteryThreeQuarters, FaBatteryFull, FaChargingStation
} from "react-icons/fa";
import HoraFecha from "./Hora_y_fecha/HoraFecha";

import useConexionInternet from "../../hooks/useConexionInternet";
import useBattery from "../../hooks/useBattery";

export default function EspacioDerecho() {

    const { isOnline } = useConexionInternet();

    const { level, charging, supported } = useBattery();

    const getBatteryIcon = () => {
        // Si está cargando, mostrar icono de carga
        if (charging) {
            return <FaChargingStation/>;
        }

        // Si no hay soporte para Battery API, mostrar icono completo por defecto
        if (!supported) {
            return <FaBatteryFull />;
        }

        // Mostrar icono según el nivel de batería
        const batteryLevel = level * 100;

        if (batteryLevel >= 90) {
            return <FaBatteryFull/>;
        } else if (batteryLevel >= 60) {
            return <FaBatteryThreeQuarters/>;
        } else if (batteryLevel >= 40) {
            return <FaBatteryHalf/>;
        } else if (batteryLevel >= 20) {
            return <FaBatteryQuarter/>;
        } else {
            return <FaBatteryEmpty/>;
        }
    };

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
                            text-sm lg:text-base 2xl:text-xl"
                    title={supported ? `Batería: ${Math.round(level * 100)}%${charging ? ' (Cargando)' : ''}` : 'Estado de batería no disponible'}>
                    {getBatteryIcon()}
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title="No Disponible">
                <HiVolumeUp />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl" title={isOnline ? "Conectado" : "Desconectado"}>
                {isOnline ? <HiWifi/> :
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