import React from "react";
import ContVentanaInicio from "./ContVentanaInicio";

import { motion } from "framer-motion";

export default function VentanaInicio({
    toggleVerVentanaInicio, toggleVerVentanaBloqueo,
    toggleVerVentanaSuspendido, toggleVerVentanaApagado,
    toggleVerVentanaReinicio,

    verAcercaDe, setVerAcercaDe, toggleVerAcercaDe,
    ventanaMinimizadaAcercaDe, toggleMinimizarVentanaAcercaDe,
    infoAcercaDe,

    verContacto, setVerContacto, toggleVerContacto,
    ventanaMinimizadaContacto, toggleMinimizarVentanaContacto,
    infoContacto,

    verHabilidades, setVerHabilidades, toggleVerHabilidades,
    ventanaMinimizadaHabilidades, toggleMinimizarVentanaHabilidades,
    infoHabilidades,

    verProyectos, setVerProyectos, toggleVerProyectos,
    ventanaMinimizadaProyectos, toggleMinimizarVentanaProyectos,
    infoProyectos,

    setUserInteracted, bringToFront, isTransparent }) {

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => {
                toggleVerVentanaInicio();
            }}>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed inset-0 bottom-10 left-0 right-0">
                <div className={`${isTransparent ? "opacity-30" : "opacity-100"} h-full w-[83%] lg:w-[47%] 
                            bg-blue-700 dark:bg-gray-800`} 
                    
                    onClick={(e) => e.stopPropagation()}>
                    <ContVentanaInicio
                        toggleVerVentanaInicio={toggleVerVentanaInicio}
                        toggleVerVentanaBloqueo={toggleVerVentanaBloqueo}
                        toggleVerVentanaSuspendido={toggleVerVentanaSuspendido}
                        toggleVerVentanaApagado={toggleVerVentanaApagado}
                        toggleVerVentanaReinicio={toggleVerVentanaReinicio}

                        toggleVerAcercaDe={toggleVerAcercaDe}
                        verAcercaDe={verAcercaDe}
                        setVerAcercaDe={setVerAcercaDe}
                        ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}
                        toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                        infoAcercaDe={infoAcercaDe}

                        toggleVerContacto={toggleVerContacto}
                        verContacto={verContacto}
                        setVerContacto={setVerContacto}
                        ventanaMinimizadaContacto={ventanaMinimizadaContacto}
                        toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                        infoContacto={infoContacto}

                        toggleVerHabilidades={toggleVerHabilidades}
                        verHabilidades={verHabilidades}
                        setVerHabilidades={setVerHabilidades}
                        ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}
                        toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                        infoHabilidades={infoHabilidades}

                        toggleVerProyectos={toggleVerProyectos}
                        verProyectos={verProyectos}
                        setVerProyectos={setVerProyectos}
                        ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}
                        toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                        infoProyectos={infoProyectos}

                        setUserInteracted={setUserInteracted}

                        bringToFront={bringToFront}

                        isTransparent={isTransparent}
                    />
                </div>
            </motion.div>
        </div>
    );
}