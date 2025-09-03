import React from "react";

import Escritorio from "./componentes/Escritorio/Escritorio";

export default function App() {
  return (
    <div className="bg-blue-950 dark:bg-gray-950 min-h-screen h-screen max-h-screen w-full overflow-hidden flex flex-col justify-end fixed inset-0">
      <Escritorio />
    </div>
  );
}