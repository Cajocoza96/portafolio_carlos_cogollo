import React from "react";
import ContVentanaInicio from "./ContVentanaInicio";

export default function VentanaInicio({ toggleVerVentanaInicio, toggleVerVentanaBloqueo, 
                                        toggleVerVentanaSuspendido, toggleVerVentanaApagado, 
                                        toggleVerVentanaReinicio,

                                        
                                        verAcercaDe, setVerAcercaDe, toggleVerAcercaDe,
                                        ventanaMinimizadaAcercaDe, toggleMinimizarVentanaAcercaDe,

                                        verContacto, setVerContacto, toggleVerContacto,
                                        ventanaMinimizadaContacto, toggleMinimizarVentanaContacto,

                                        verHabilidades, setVerHabilidades, toggleVerHabilidades,
                                        ventanaMinimizadaHabilidades, toggleMinimizarVentanaHabilidades,
                                        
                                        setUserInteracted, bringToFront }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" 
                onClick={toggleVerVentanaInicio}>
            <div className="fixed inset-0 bottom-10 left-0 right-0">
                <div className="h-full w-[83%] lg:w-[47%] 
                            bg-blue-700 dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
                
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

                    toggleVerContacto={toggleVerContacto}
                    verContacto={verContacto}
                    setVerContacto={setVerContacto}
                    ventanaMinimizadaContacto={ventanaMinimizadaContacto}
                    toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}

                    toggleVerHabilidades={toggleVerHabilidades}
                    verHabilidades={verHabilidades}
                    setVerHabilidades={setVerHabilidades}
                    ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}
                    toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}

                    setUserInteracted={setUserInteracted}

                    bringToFront={bringToFront}
                />
                </div>
            </div>
        </div>

    );
}