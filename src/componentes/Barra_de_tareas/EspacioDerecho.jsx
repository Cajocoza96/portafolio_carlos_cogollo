import React from "react";
import { HiWifi, HiVolumeUp, HiOutlineBell, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaBatteryFull } from "react-icons/fa";
import HoraFecha from "./Hora_y_fecha/HoraFecha";

export default function EspacioDerecho() {
    return (
        <div className="w-full h-10 text-white hidden
                        lg:flex flex-row items-center 
                        lg:justify-end
                        lg:col-span-1">

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiOutlineQuestionMarkCircle />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <FaBatteryFull />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiVolumeUp />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiWifi />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-2 flex items-center">
                <HoraFecha />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiOutlineBell />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                            h-10 p-1 flex items-center
                            text-sm lg:text-base 2xl:text-xl
                            border border-white">
                
            </div>
        </div>
    );
}