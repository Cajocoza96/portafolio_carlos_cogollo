import React, { useState } from "react";
import Archivos from "./Archivos_accesos_directos/Archivos";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";

export default function ContIconArcEscritorio({ toggleVerAcercaDe, 
                                                verAcercaDe, setVerAcercaDe }) {

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana
    const [ventanaState, setVentanaState] = useState(null);

    // Función para actualizar el estado de la ventana
    const handleVentanaStateChange = (newState) => {
        setVentanaState(newState);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">

            {verAcercaDe && (
                <VentanaPrincipal 
                    toggleVerAcercaDe={toggleVerAcercaDe}
                    savedState={ventanaState}
                    onStateChange={handleVentanaStateChange}
                />
            )}

            <Archivos nombre="Acerca de.txt"
                toggleVerAcercaDe={toggleVerAcercaDe}
                verAcercaDe={verAcercaDe}
                setVerAcercaDe={setVerAcercaDe}
            />
            

        </div>
    );
}