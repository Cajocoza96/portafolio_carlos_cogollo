import React from "react";
import { FaSquare, FaPlay, FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function EspacioCentro() {
    return (
        <div className="w-full h-10 text-white hidden
                        sm:flex flex-row items-center lg:justify-start">

            <div className="hover:bg-blue-500 dark:bg-gray-600
                                        h-10 w-12 p-1 flex items-center justify-center
                                        text-sm lg:text-xl 2xl:text-2xl">
                <FaSquare />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                                        h-10 w-12 p-1 flex items-center justify-center
                                        text-sm lg:text-xl 2xl:text-2xl">
                <FaPlay />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                                        h-10 w-12 p-1 flex items-center justify-center
                                        text-sm lg:text-xl 2xl:text-2xl">
                <FaCaretUp />
            </div>

            <div className="hover:bg-blue-500 dark:bg-gray-600
                                        h-10 w-12 p-1 flex items-center justify-center
                                        text-sm lg:text-xl 2xl:text-2xl">
                <FaCaretDown />
            </div>

        </div>
    );
}