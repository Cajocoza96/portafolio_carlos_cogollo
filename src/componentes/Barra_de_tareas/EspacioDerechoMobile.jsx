import React from "react";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function EspacioDerechoMobile({ verEspacioDerechoMobile, toggleVerEspacioDerechoMobile }) {
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

        </div>
    );
}