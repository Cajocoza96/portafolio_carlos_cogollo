import React from "react";
import Archivos from "./Archivos_accesos_directos/Archivos";

import VentanaPrincipal from "../Ventanas/VentanaPrincipal";

export default function ContIconArcEscritorio({ toggleVerArchivo, verArchivo }) {

    return (
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">
            
            {verArchivo && (
                <VentanaPrincipal toggleVerArchivo={toggleVerArchivo}/>
            )}
            
            <Archivos nombre="Acerca de.txt" toggleVerArchivo={toggleVerArchivo} />

        </div>
    );
}