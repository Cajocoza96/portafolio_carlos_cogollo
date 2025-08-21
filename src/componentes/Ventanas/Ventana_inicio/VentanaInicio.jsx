import React from "react";
import ContVentanaInicio from "./ContVentanaInicio";

export default function VentanaInicio({ toggleVerVentanaInicio, toggleVerAcercaDe, 
                                        toggleVerVentanaBloqueo, toggleVerVentanaSuspendido,
                                        toggleVerVentanaApagado, toggleVerVentanaReinicio,
                                        verAcercaDe, setVerAcercaDe,
                                        setUserInteracted }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" 
                onClick={toggleVerVentanaInicio}>
            <div className="fixed inset-0 bottom-10 left-0 right-0">
                <div className="h-full w-[83%] lg:w-[47%] 
                            bg-blue-700 dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
                
                <ContVentanaInicio 
                    toggleVerVentanaInicio={toggleVerVentanaInicio}
                    toggleVerAcercaDe={toggleVerAcercaDe}
                    toggleVerVentanaBloqueo={toggleVerVentanaBloqueo}
                    toggleVerVentanaSuspendido={toggleVerVentanaSuspendido}
                    toggleVerVentanaApagado={toggleVerVentanaApagado}
                    toggleVerVentanaReinicio={toggleVerVentanaReinicio}

                    verAcercaDe={verAcercaDe}
                    setVerAcercaDe={setVerAcercaDe}

                    setUserInteracted={setUserInteracted}
                />
                </div>
            </div>
        </div>

    );
}