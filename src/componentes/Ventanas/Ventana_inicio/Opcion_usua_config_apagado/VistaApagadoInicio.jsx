import React from "react";

export default function VistaApagadoInicio() {
    return (
        <div className="bg-blue-700 w-screen h-[100svh]  
                        fixed inset-0 z-80"
            onClick={(e) => e.stopPropagation()}>
            <div className="">
                <p className="text-xs lg:text-sm 2xl:text-base 
                            text-white text-center">
                    Apagando equipo...
                </p>
            </div>

        </div>
    );
}