import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Función para manejar cambios de viewport
function handleViewportChange() {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes');
  }
}

// Agregar event listeners cuando se carga la página
window.addEventListener('resize', handleViewportChange);
window.addEventListener('orientationchange', handleViewportChange);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)