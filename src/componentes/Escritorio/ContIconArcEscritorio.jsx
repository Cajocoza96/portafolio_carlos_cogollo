import React from "react";
import Archivos from "./Archivos_accesos_directos/Archivos";

export default function ContIconArcEscritorio(){
    return(
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">
            <Archivos nombre="Acerca de"/>
            <Archivos nombre="Habilidades"/>
            <Archivos nombre="Proyectos"/>
            <Archivos nombre="Contacto"/>
        </div>
    );
}