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
    toggleVerAcercaDe,
    infoAcercaDe,
    toggleMinimizarVentanaAcercaDe,
    ventanaMinimizadaAcercaDe,

    verContacto,
    toggleVerContacto,
    infoContacto,
    toggleMinimizarVentanaContacto,
    ventanaMinimizadaContacto,

    verHabilidades,
    toggleVerHabilidades,
    infoHabilidades,
    toggleMinimizarVentanaHabilidades,
    ventanaMinimizadaHabilidades,

    verProyectos,
    toggleVerProyectos,
    infoProyectos,
    toggleMinimizarVentanaProyectos,
    ventanaMinimizadaProyectos,

    bringToFront, onHoverVentana,

    verEspacioDerechoMobile, toggleVerEspacioDerechoMobile,
    setVerEspacioDerechoMobile
}) {
    return (
        <div className="bg-blue-900 dark:bg-gray-900 gap-1
                        grid grid-cols-[7fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr]
                        lg:grid-cols-3 z-60 items-center">
            <EspacioIzquierdo
                toggleVerVentanaInicio={toggleVerVentanaInicio}
                toggleVerVentanaBusqueda={toggleVerVentanaBusqueda}

                setVerVentanaInicio={setVerVentanaInicio}
                verVentanaInicio={verVentanaInicio}

                setVerVentanaBusqueda={setVerVentanaBusqueda}
                verVentanaBusqueda={verVentanaBusqueda}

                verEspacioDerechoMobile={verEspacioDerechoMobile}
                toggleVerEspacioDerechoMobile={toggleVerEspacioDerechoMobile}
                setVerEspacioDerechoMobile={setVerEspacioDerechoMobile}
            />
            <EspacioCentro
                verVentanaInicio={verVentanaInicio}
                toggleVerVentanaInicio={toggleVerVentanaInicio}

                verAcercaDe={verAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                toggleVerAcercaDe={toggleVerAcercaDe}
                infoAcercaDe={infoAcercaDe}
                ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe}

                verContacto={verContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                toggleVerContacto={toggleVerContacto}
                infoContacto={infoContacto}
                ventanaMinimizadaContacto={ventanaMinimizadaContacto}

                verHabilidades={verHabilidades}
                toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                toggleVerHabilidades={toggleVerHabilidades}
                infoHabilidades={infoHabilidades}
                ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}

                verProyectos={verProyectos}
                toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                toggleVerProyectos={toggleVerProyectos}
                infoProyectos={infoProyectos}
                ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}

                bringToFront={bringToFront}

                onHoverVentana={onHoverVentana}
            />
            <EspacioDerecho 
                verAcercaDe={verAcercaDe}
                toggleMinimizarVentanaAcercaDe={toggleMinimizarVentanaAcercaDe}
                ventanaMinimizadaAcercaDe={ventanaMinimizadaAcercaDe} 
            
                verContacto={verContacto}
                toggleMinimizarVentanaContacto={toggleMinimizarVentanaContacto}
                ventanaMinimizadaContacto={ventanaMinimizadaContacto}
            
                verHabilidades={verHabilidades}
                toggleMinimizarVentanaHabilidades={toggleMinimizarVentanaHabilidades}
                ventanaMinimizadaHabilidades={ventanaMinimizadaHabilidades}
            
                verProyectos={verProyectos}
                toggleMinimizarVentanaProyectos={toggleMinimizarVentanaProyectos}
                ventanaMinimizadaProyectos={ventanaMinimizadaProyectos}
            />

            <EspacioDerechoMobile
                verEspacioDerechoMobile={verEspacioDerechoMobile}
                toggleVerEspacioDerechoMobile={toggleVerEspacioDerechoMobile}
            />
        </div>
    );
}