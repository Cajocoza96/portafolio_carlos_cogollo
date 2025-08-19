import React from "react";
import ContVentanaInicio from "./ContVentanaInicio";

export default function VentanaInicio({ toggleVerVentanaInicio, toggleVerArchivo, 
                                        toggleVerVentanaBloqueo, toggleVerVentanaSuspendido,
                                        toggleVerVentanaApagado, toggleVerVentanaReinicio,
                                        verArchivo, setUserInteracted }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" 
                onClick={toggleVerVentanaInicio}>
            <div className="fixed inset-0 bottom-10 left-0 right-0">
                <div className="h-full w-[82%] lg:w-[47%] 
                            bg-blue-600 dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
                
                <ContVentanaInicio 
                    toggleVerVentanaInicio={toggleVerVentanaInicio}
                    toggleVerArchivo={toggleVerArchivo}
                    toggleVerVentanaBloqueo={toggleVerVentanaBloqueo}
                    toggleVerVentanaSuspendido={toggleVerVentanaSuspendido}
                    toggleVerVentanaApagado={toggleVerVentanaApagado}
                    toggleVerVentanaReinicio={toggleVerVentanaReinicio}
                    verArchivo={verArchivo}
                    setUserInteracted={setUserInteracted}
                />
                </div>
            </div>
        </div>

    );
}