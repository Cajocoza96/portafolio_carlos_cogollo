import React, { useState, useEffect } from "react";
import { HiDesktopComputer, HiSun, HiMoon } from "react-icons/hi";

import { motion } from "framer-motion";

const themeKeys = {
    system: "system",
    light: "light",
    dark: "dark",
}

export default function ConfiguracionTema({ toggleVerConfigTema }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || themeKeys.system);

    const options = [
        {
            label: <div className="flex flex-row items-center gap-2">
                <HiSun />
                <p>Claro</p>
            </div>, value: "light"
        },

        {
            label: <div className="flex flex-row items-center gap-2">
                <HiMoon />
                <p>Oscuro</p>
            </div>, value: "dark"
        },

        {
            label: <div className="flex flex-row items-center gap-2">
                <HiDesktopComputer />
                <p>Sistema (predeterminado)</p>
            </div>, value: "system"
        }
    ];

    useEffect(() => {
        const root = document.documentElement;
        const mediaquery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            root.classList.toggle(
                "dark",
                theme === themeKeys.dark ||
                (theme === themeKeys.system && mediaquery.matches)
            );
            localStorage.setItem("theme", theme);
        };

        applyTheme();

        mediaquery.addEventListener("change", applyTheme);

        return () => {
            mediaquery.removeEventListener("change", applyTheme);
        }
    }, [theme]);

    const getThemeLabel = () => {
        switch (theme) {
            case "light":
                return "Claro";
            case "dark":
                return "Oscuro";
            case "system":
                return "Sistema (predeterminado)";
            default:
                return "Sistema (predeterminado)";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={toggleVerConfigTema}>

            <div className="bg-blue-800 dark:bg-gray-900 h-auto overflow-hidden
                                w-[47%] 2xs:w-[30%] md:w-[25%] lg:w-[20%] 2xl:w-[15%]
                                absolute bottom-30 left-0 flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}>
                <div className="text-white w-full h-auto p-1 
                                flex flex-col items-center gap-2">

                    <div className="w-full flex flex-row items-center gap-2">
                        {theme === "light" && <HiSun className="text-base lg:text-xl 2xl:text-2xl" />}
                        {theme === "dark" && <HiMoon className="text-base lg:text-xl 2xl:text-2xl" />}
                        {theme === "system" && <HiDesktopComputer className="text-base lg:text-xl 2xl:text-2xl" />}

                        <div className="flex flex-col select-none">
                            <p className="text-sm lg:text-base 2xl:text-xl">Elige tu tema</p>
                            <p className="text-xs lg:text-sm 2xl:text-base">{getThemeLabel()}</p>
                        </div>

                    </div>

                    <div className="w-full flex flex-col ">
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => {
                                    setTheme(opt.value);
                                }}
                                className={`hover:bg-blue-700 hover:dark:bg-gray-800
                                            active:bg-blue-600 dark:active:bg-gray-700
                                            h-auto w-full p-1 overflow-hidden select-none
                                            text-xs lg:text-sm 2xl:text-base 
                                            ${theme === opt.value ? "font-bold" : ""}`}>

                                <div className="flex flex-row items-center gap-2">

                                    <div
                                        className="flex flex-row items-center gap-2">
                                        {opt.label}
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </motion.div>
    );
}