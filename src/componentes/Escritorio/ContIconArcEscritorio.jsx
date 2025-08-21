import React from "react";
import Archivos from "./Archivos_accesos_directos/Archivos";

import VentanaPrincipal from "../Ventanas/VentanaPrincipal";

export default function ContIconArcEscritorio({ toggleVerAcercaDe, 
                                                verAcercaDe, setVerAcercaDe }) {

    return (
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">

            {verAcercaDe && (
                <VentanaPrincipal toggleVerAcercaDe={toggleVerAcercaDe} />
            )}

            <Archivos nombre="Acerca de.txt"
                toggleVerAcercaDe={toggleVerAcercaDe}
                verAcercaDe={verAcercaDe}
                setVerAcercaDe={setVerAcercaDe}
            />

        </div>
    );
}