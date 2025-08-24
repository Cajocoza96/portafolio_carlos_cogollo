import React from "react";

import { FaRegFileAlt } from "react-icons/fa";

export default function Archivo({ nombre, onClick }) {
    return (
        <div className="flex flex-col items-center justify-around
                        hover:border hover:border-gray-300
                        active:border active:border-gray-300
                        hover:bg-blue-300/30 active:bg-blue-300/30
                        dark:hover:bg-gray-300/30 dark:active:bg-gray-300/30
                            h-20 w-18 py-1 select-none"
            onClick={onClick}>
            <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl text-white" />
            <p className="text-xs 2xl:text-base text-white text-center"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.75)" }}>
                {nombre}
            </p>
        </div>
    );
}