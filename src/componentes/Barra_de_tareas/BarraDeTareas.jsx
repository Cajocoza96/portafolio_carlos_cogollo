import React from "react";

import EspacioIzquierdo from "./EspacioIzquierdo";
import EspacioDerecho from "./EspacioDerecho";
import EspacioCentro from "./EspacioCentro";

export default function BarraDeTareas({ toggleVerVentanaInicio }) {
    return (
        <div className="bg-blue-700 dark:bg-black
                        grid grid-cols-1 sm:grid-cols-[3fr_1fr]
                        lg:grid-cols-3 z-60 ">
            <EspacioIzquierdo toggleVerVentanaInicio={toggleVerVentanaInicio}/>
            <EspacioCentro />
            <EspacioDerecho/>
        </div>
    );
}