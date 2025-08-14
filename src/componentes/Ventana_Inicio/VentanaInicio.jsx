import React from "react";

export default function VentanaInicio({ toggleVerVentanaInicio }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={toggleVerVentanaInicio}>
            <div className="fixed bottom-10 left-0 right-0">
                <div className="h-[100svh] w-[70%] lg:w-[45%]
                        bg-blue-600 dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
                </div>
            </div>
        </div>
    );
}