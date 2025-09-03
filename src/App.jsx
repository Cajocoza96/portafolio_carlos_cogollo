import React from "react";

import Escritorio from "./componentes/Escritorio/Escritorio";

export default function App() {
  return (
    <div className="bg-blue-950 dark:bg-gray-950 h-screen flex flex-col justify-end">
      <Escritorio />
    </div>

  );
}