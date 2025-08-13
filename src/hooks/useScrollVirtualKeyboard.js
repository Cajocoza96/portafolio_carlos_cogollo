import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para manejar el comportamiento del teclado virtual en dispositivos móviles
 * Detecta cuando el teclado se abre/cierra y maneja el scroll automático
 */
export default function useScrollVirtualKeyboard() {
  const initialViewportHeight = useRef(window.visualViewport?.height || window.innerHeight);
  const isKeyboardOpen = useRef(false);

  useEffect(() => {
    // Verificar si el dispositivo soporta Visual Viewport API
    if (!window.visualViewport) {
      // Fallback para dispositivos que no soportan Visual Viewport API
      return;
    }

    const handleViewportChange = () => {
      const currentHeight = window.visualViewport.height;
      const heightDifference = initialViewportHeight.current - currentHeight;
      
      // Consideramos que el teclado está abierto si hay una reducción significativa del viewport
      // (generalmente más de 150px en dispositivos móviles)
      const keyboardThreshold = 150;
      const keyboardIsOpen = heightDifference > keyboardThreshold;

      if (keyboardIsOpen && !isKeyboardOpen.current) {
        // El teclado se acaba de abrir
        isKeyboardOpen.current = true;
        handleKeyboardOpen();
      } else if (!keyboardIsOpen && isKeyboardOpen.current) {
        // El teclado se acaba de cerrar
        isKeyboardOpen.current = false;
        handleKeyboardClose();
      }
    };

    const handleKeyboardOpen = () => {
      // Hacer scroll hacia abajo para asegurar que la barra de tareas sea visible
      setTimeout(() => {
        // Buscar la barra de tareas en el DOM
        const barraDeTareas = document.querySelector('[class*="bg-blue-700"], [class*="dark:bg-black"]');
        
        if (barraDeTareas) {
          barraDeTareas.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          });
        } else {
          // Fallback: scroll hacia el final de la página
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 100); // Pequeño delay para asegurar que el teclado esté completamente visible
    };

    //restablecer la posición del scroll cuando el teclado se cierra
    const handleKeyboardClose = () => {
      /*
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
      */
    };

    // Escuchar cambios en el viewport
    window.visualViewport.addEventListener('resize', handleViewportChange);

    // Cleanup
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
      }
    };
  }, []);

  // Método adicional para detectar cuando un input recibe focus
  // y forzar el scroll si es necesario
  const handleInputFocus = (element) => {
    if (!element) return;

    // Verificar si estamos en un dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      setTimeout(() => {
        // Scroll hacia el elemento que tiene focus
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });

        // Después hacer scroll adicional para mostrar la barra de tareas
        setTimeout(() => {
          const barraDeTareas = document.querySelector('[class*="bg-blue-700"], [class*="dark:bg-black"]');
          if (barraDeTareas) {
            barraDeTareas.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            });
          }
        }, 300);
      }, 300);
    }
  };

  return {
    handleInputFocus,
    isKeyboardVisible: isKeyboardOpen.current
  };
}