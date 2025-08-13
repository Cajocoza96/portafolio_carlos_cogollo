import { useState, useEffect } from 'react';

export default function useVirtualKeyboard() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const initialViewportHeight = window.visualViewport?.height || window.innerHeight;
    
    function handleViewportChange() {
      if (window.visualViewport) {
        const currentHeight = window.visualViewport.height;
        const heightDifference = initialViewportHeight - currentHeight;
        
        // Si la diferencia es mayor a 150px, asumimos que el teclado está visible
        setIsKeyboardVisible(heightDifference > 150);
      }
    }

    // Usar Visual Viewport API si está disponible (más preciso)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
      
      return () => {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
      };
    } else {
      // Fallback para navegadores que no soportan Visual Viewport API
      let initialHeight = window.innerHeight;
      
      function handleResize() {
        const currentHeight = window.innerHeight;
        const heightDifference = initialHeight - currentHeight;
        setIsKeyboardVisible(heightDifference > 150);
      }

      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isKeyboardVisible;
}