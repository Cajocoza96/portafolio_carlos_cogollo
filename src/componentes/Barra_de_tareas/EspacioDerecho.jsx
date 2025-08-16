import React from "react";
import { HiWifi, HiVolumeUp, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaBatteryFull } from "react-icons/fa";
import HoraFecha from "./Hora_y_fecha/HoraFecha";

export default function EspacioDerecho() {
    return (
        <div className="w-full h-10 text-white hidden
                        md:flex flex-row items-center 
                        lg:justify-end
                        lg:col-span-1">

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiOutlineQuestionMarkCircle />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <FaBatteryFull />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiVolumeUp />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
                <HiWifi />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center">
                <HoraFecha />
            </div>

            <div className="hover:bg-blue-600 dark:bg-gray-700
                            active:bg-blue-500 dark:active:bg-gray-600
                            h-10 p-2 flex items-center
                            text-sm lg:text-base 2xl:text-xl">
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