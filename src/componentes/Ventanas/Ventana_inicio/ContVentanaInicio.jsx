import React, { useState } from "react";
import { HiMenu, HiUserCircle, HiCog } from "react-icons/hi";
import { HiPower } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";

import OpcionesApagado from "./Opcion_usua_config_apagado/OpcionesApagado";
import InfoUsuario from "./Opcion_usua_config_apagado/InfoUsuario";
import ConfiguracionTema from "./Opcion_usua_config_apagado/ConfiguracionTema";

import { AnimatePresence } from "framer-motion";

export default function ContVentanaInicio({ toggleVerVentanaInicio,
    toggleVerVentanaBloqueo, toggleVerVentanaSuspendido,
    toggleVerVentanaApagado, toggleVerVentanaReinicio,

    toggleVerAcercaDe, verAcercaDe,
    ventanaMinimizadaAcercaDe, toggleMinimizarVentanaAcercaDe,
    infoAcercaDe,

    toggleVerContacto, verContacto,
    ventanaMinimizadaContacto, toggleMinimizarVentanaContacto,
    infoContacto,

    toggleVerHabilidades, verHabilidades,
    ventanaMinimizadaHabilidades, toggleMinimizarVentanaHabilidades,
    infoHabilidades,

    toggleVerProyectos, verProyectos,
    ventanaMinimizadaProyectos, toggleMinimizarVentanaProyectos,
    infoProyectos,

    setUserInteracted, bringToFront, isTransparent }) {

    const [verOpcionesApagado, setVerOpcionesApagado] = useState(false);

    const toggleVerOpcionesApagado = () => {
        setVerOpcionesApagado(!verOpcionesApagado);
    }


    const [verInfoUsuario, setVerInfoUsuario] = useState(false);

    const toogleVerInfoUsuario = () => {
        setVerInfoUsuario(!verInfoUsuario);
    }


    const [verConfigTema, setVerConfigTema] = useState(false);

    const toggleVerConfigTema = () => {
        setVerConfigTema(!verConfigTema);
    }

    const handleClickVerAcercaDe = () => {
        if (verAcercaDe && ventanaMinimizadaAcercaDe) {
            toggleMinimizarVentanaAcercaDe();
            toggleVerVentanaInicio();
            return;

        } else if (verAcercaDe && !ventanaMinimizadaAcercaDe) {
            bringToFront('acercaDe');
            toggleVerVentanaInicio();
            return;

        } else {
            toggleVerAcercaDe();
            setTimeout(() => {
                bringToFront('acercaDe');
            }, 0);
            toggleVerVentanaInicio();
        }
    }

    const handleClickVerContacto = () => {
        if (verContacto && ventanaMinimizadaContacto) {
            toggleMinimizarVentanaContacto();
            toggleVerVentanaInicio();
            return;

        } else if (verContacto && !ventanaMinimizadaContacto) {
            bringToFront('contacto');
            toggleVerVentanaInicio();
            return;

        } else {
            toggleVerContacto();
            setTimeout(() => {
                bringToFront('contacto');
            }, 0);
            toggleVerVentanaInicio()
        }
    }

    const handleClickVerHabilidades = () => {
        if (verHabilidades && ventanaMinimizadaHabilidades) {
            toggleMinimizarVentanaHabilidades();
            toggleVerVentanaInicio();
            return;

        } else if (verHabilidades && !ventanaMinimizadaHabilidades) {
            bringToFront('habilidades');
            toggleVerVentanaInicio()
            return

        } else {
            toggleVerHabilidades();
            setTimeout(() => {
                bringToFront('habilidades');
            }, 0);
            toggleVerVentanaInicio()
        }
    }

    const handleClickVerProyectos = () => {
        if (verProyectos && ventanaMinimizadaProyectos) {
            toggleMinimizarVentanaProyectos();
            toggleVerVentanaInicio()
            return

        } else if (verProyectos && !ventanaMinimizadaProyectos) {
            bringToFront('proyectos');
            toggleVerVentanaInicio()
            return

        } else {
            toggleVerProyectos();
            setTimeout(() => {
                bringToFront('proyectos');
            }, 0);
            toggleVerVentanaInicio()
        }
    }

    return (
        <div className={`${isTransparent ? "invisible" : "visible"} h-full w-full mx-auto 
                        grid grid-cols-[47px_3fr_3fr] 2xs:grid-cols-[45px_2fr_3fr] relative`}>

            <AnimatePresence>
                {verInfoUsuario && (
                    <InfoUsuario toogleVerInfoUsuario={toogleVerInfoUsuario} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {verConfigTema && (
                    <ConfiguracionTema toggleVerConfigTema={toggleVerConfigTema} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {verOpcionesApagado && (
                    <OpcionesApagado
                        toggleVerOpcionesApagado={toggleVerOpcionesApagado}
                        toggleVerVentanaBloqueo={toggleVerVentanaBloqueo}
                        toggleVerVentanaSuspendido={toggleVerVentanaSuspendido}
                        toggleVerVentanaApagado={toggleVerVentanaApagado}
                        toggleVerVentanaReinicio={toggleVerVentanaReinicio}
                        setUserInteracted={setUserInteracted}
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-col h-full overflow-y-auto">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                    active:bg-blue-500 dark:active:bg-gray-600
                                    h-10 w-10 p-1
                                    flex items-center justify-center" title="Inicio">
                        <HiMenu className="text-base lg:text-xl 2xl:text-2xl text-white" />
                    </div>

                    <div className="flex flex-col justity-center">
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-10 p-1
                                        flex items-center justify-center"
                            onClick={toogleVerInfoUsuario} title="Carlos Cogollo">
                            <HiUserCircle className="text-base lg:text-xl 2xl:text-2xl text-white" />
                        </div>
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-10 p-1
                                        flex items-center justify-center" title="Configuración"
                            onClick={toggleVerConfigTema}>
                            <HiCog className="text-base lg:text-xl 2xl:text-2xl text-white" />
                        </div>
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-10 p-1
                                        flex items-center justify-center"
                            onClick={toggleVerOpcionesApagado} title="Inicio/apagado">
                            <HiPower className="text-base lg:text-xl 2xl:text-2xl text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden select-none">
                <div className="w-full h-full grid grid-cols-1">
                    <div className="flex flex-col gap-1">
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center ">
                            <div className="ml-1">
                                <p className="text-xs lg:text-sm 2xl:text-base text-white">
                                    A
                                </p>
                            </div>
                        </div>

                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center"
                            onClick={handleClickVerAcercaDe}>
                            <div className="flex flex-row items-center
                                            h-auto w-full py-1 gap-2">
                                <FaRegFileAlt className="text-xl lg:text-2xl 
                                                        2xl:text-3xl text-white" />
                                <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                    {infoAcercaDe.titulo}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center ">
                            <div className="ml-1">
                                <p className="text-xs lg:text-sm 2xl:text-base text-white">
                                    C
                                </p>
                            </div>
                        </div>

                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center "
                            onClick={handleClickVerContacto}>
                            <div className="flex flex-row items-center
                                                    h-auto w-full py-1 gap-2">
                                <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl 
                                                        text-white" />
                                <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                    {infoContacto.titulo}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center ">
                            <div className="ml-1">
                                <p className="text-xs lg:text-sm 2xl:text-base text-white">
                                    H
                                </p>
                            </div>
                        </div>

                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center"
                            onClick={handleClickVerHabilidades}>
                            <div className="flex flex-row items-center
                                                    h-auto w-full py-1 gap-2">
                                <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl 
                                                        text-white" />
                                <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                    {infoHabilidades.titulo}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center ">
                            <div className="ml-1">
                                <p className="text-xs lg:text-sm 2xl:text-base text-white">
                                    P
                                </p>
                            </div>
                        </div>

                        <div className="hover:bg-blue-600 hover:dark:bg-gray-700
                                        active:bg-blue-500 dark:active:bg-gray-600
                                        h-10 w-full p-1
                                        flex items-center"
                            onClick={handleClickVerProyectos}>
                            <div className="flex flex-row items-center
                                                    h-auto w-full py-1 gap-2">
                                <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl 
                                                        text-white" />
                                <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                    {infoProyectos.titulo}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full overflow-y-auto select-none">
                <div className="h-10 w-full p-1 flex items-center ">
                    <div className="ml-1">
                        <p className="text-xs lg:text-sm 2xl:text-base text-white">
                            Información
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 mx-3">
                    <div className="bg-orange-600 hover:bg-orange-700 active:bg-orange-500
                                    h-20 w-full overflow-hidden
                                    hover:border-2 hover:border-white active:border-white
                                    flex flex-col items-center justify-center"
                        onClick={handleClickVerAcercaDe}>

                        <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl text-white" />
                        <div className="w-full ">
                            <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                {infoAcercaDe.titulo}
                            </p>
                        </div>
                    </div>

                    <div className="bg-red-600 hover:bg-red-700 active:bg-red-500
                                    h-20 w-full overflow-hidden
                                    hover:border-2 hover:border-white active:border-white
                                    flex flex-col items-center justify-center"
                        onClick={handleClickVerContacto}>
                        <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl text-white" />
                        <div className="w-full ">
                            <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                {infoContacto.titulo}
                            </p>
                        </div>
                    </div>

                    <div className="bg-violet-600 hover:bg-violet-700 active:bg-violet-500
                                    h-20 w-full overflow-hidden
                                    hover:border-2 hover:border-white active:border-white
                                    flex flex-col items-center justify-center"
                        onClick={handleClickVerHabilidades}>
                        <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl text-white" />
                        <div className="w-full ">
                            <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                {infoHabilidades.titulo}
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-600 hover:bg-green-700 active:bg-green-500
                                    h-20 w-full overflow-hidden
                                    hover:border-2 hover:border-white active:border-white
                                    flex flex-col items-center justify-center"
                        onClick={handleClickVerProyectos}>
                        <FaRegFileAlt className="text-xl lg:text-2xl 2xl:text-3xl text-white" />
                        <div className="w-full ">
                            <p className="text-xs lg:text-sm 2xl:text-base 
                                            text-white text-center truncate">
                                {infoProyectos.titulo}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}