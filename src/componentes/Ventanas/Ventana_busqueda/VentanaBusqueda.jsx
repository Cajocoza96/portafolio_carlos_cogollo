import React from "react";
import ContVentanaBusqueda from "./ContVentanaBusqueda";


export default function VentanaBusqueda({/*toggleVerVentanaBusqueda*/ }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
                /*onClick={toggleVerVentanaBusqueda}*/>
            <div className="fixed inset-0 bottom-10 left-10">
                <div className="h-full w-[83%] lg:w-[60%] 
                            bg-blue-700 dark:bg-gray-800"
                            onClick={(e)=> e.stopPropagation()}>
                
                <ContVentanaBusqueda 
                    
                />
                </div>
            </div>
        </div>

    );
}