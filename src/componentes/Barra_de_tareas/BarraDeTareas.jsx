import React from "react";

import EspacioIzquierdo from "./EspacioIzquierdo";
import EspacioDerecho from "./EspacioDerecho";
import EspacioCentro from "./EspacioCentro";
import EspacioDerechoMobile from "./EspacioDerechoMobile";

export default function BarraDeTareas({ 
    toggleVerVentanaInicio, 
    toggleVerVentanaBusqueda,
    setVerVentanaBusqueda,  
    verVentanaBusqueda,
    setVerVentanaInicio, 
    verVentanaInicio, 

    verAcercaDe, 
    verContacto,

    toggleMinimizarVentanaAcercaDe, 
    toggleMinimizarVentanaContacto,
    
    // Nuevas props necesarias para el EspacioCentro
    toggleVerAcercaDe,
    toggleVerContacto,
    infoAcercaDe,
    infoContacto
}) {
    return (
        <div className="bg-blue-800 dark:bg-gray-900 gap-1
                        grid grid-cols-[7fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr]
                        lg:grid-cols-3 z-60 items-center">
            <EspacioIzquierdo 
                toggleVerVentanaInicio={toggleVerVentanaInicio}
                toggleVerVentanaBusqueda={toggleVerVentanaBusqueda}

                setVerVentanaInicio={setVerVentanaInicio}
                verVentanaInicio={verVentanaInicio}
                
                setVerVentanaBusqueda={setVerVentanaBusqueda}
                verVentanaBusqueda={verVentanaBusqueda}
            />
            <EspacioCentro 
                verAcercaDe={verAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}

                verContacto={verContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                
                // Nuevas props
                toggleVerAcercaDe={toggleVerAcercaDe}
                toggleVerContacto={toggleVerContacto}
                infoAcercaDe={infoAcercaDe}
                infoContacto={infoContacto}
            />
            <EspacioDerecho/>
            <EspacioDerechoMobile />
        </div>
    );
}