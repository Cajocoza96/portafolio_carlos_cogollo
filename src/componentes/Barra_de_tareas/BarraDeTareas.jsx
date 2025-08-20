import React from "react";

import EspacioIzquierdo from "./EspacioIzquierdo";
import EspacioDerecho from "./EspacioDerecho";
import EspacioCentro from "./EspacioCentro";

export default function BarraDeTareas({ toggleVerVentanaInicio, verArchivo }) {
    return (
        <div className="bg-blue-800 dark:bg-gray-900 gap-1
                        grid grid-cols-[3fr_1fr] md:grid-cols-[3fr_1fr_1fr]
                        lg:grid-cols-3 z-60 ">
            <EspacioIzquierdo toggleVerVentanaInicio={toggleVerVentanaInicio}/>
            <EspacioCentro verArchivo={verArchivo}/>
            <EspacioDerecho/>
        </div>
    );
}