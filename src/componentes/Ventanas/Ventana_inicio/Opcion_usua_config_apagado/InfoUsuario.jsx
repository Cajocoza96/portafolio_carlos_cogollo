import React from "react";

import { HiUserCircle } from "react-icons/hi";

import { motion } from "framer-motion";

export default function InfoUsuario({ toogleVerInfoUsuario }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={toogleVerInfoUsuario}>
            <div className="bg-blue-800 dark:bg-gray-900 h-auto 
                            w-[49%] 2xs:w-[37%] md:w-[35%] lg:w-[20%] 2xl:w-[20%]
                            absolute bottom-40 left-0
                            flex flex-col items-center justify-center select-none"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="w-[95%] h-auto py-4 px-1 flex flex-col gap-2">

                    <div className="w-full flex flex-row items-center gap-2">

                        <div className="grid grid-cols-2">
                            <div className="bg-red-600 w-2.5 h-2.5"></div>
                            <div className="bg-green-600 w-2.5 h-2.5"></div>
                            <div className="bg-blue-600 w-2-5 h-2.5"></div>
                            <div className="bg-orange-600 w-2.5 h-2.5"></div>
                        </div>

                        <p className="text-xs lg:text-sm 2xl:text-base text-white">
                            Microsoft
                        </p>

                    </div>


                    <div className="flex flex-row items-center gap-1">
                        <HiUserCircle className="text-white text-4xl lg:text-6xl" />

                        <div className="flex flex-col justify-center">
                            <p className="text-white text-sm lg:text-base 2xl:text-xl" translate="no">
                                Carlos Cogollo
                            </p>

                            <p className="text-gray-400 text-xs lg:text-sm 2xl:text-base">
                                Cuenta local
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}