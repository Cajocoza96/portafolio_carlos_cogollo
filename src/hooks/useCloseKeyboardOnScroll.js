import { useEffect, useCallback, useRef } from 'react';

export function useCloseKeyboardOnScroll(options = {}) {
  const {
    container = null, // ref del contenedor, null = window
    touchOnly = true, // solo en dispositivos táctiles
    delay = 0, // delay antes de cerrar (ms)
    excludeSelectors = [] // selectores a excluir
  } = options;

  // Referencias para controlar el estado
  const lastScrollTop = useRef(0);
  const isAtBottom = useRef(false);
  const recentInputFocus = useRef(false);
  const focusTimeoutRef = useRef(null);
  const programmaticScroll = useRef(false);

  const closeKeyboard = useCallback(() => {
    const activeElement = document.activeElement;
    
    if (!activeElement) return;
    
    // Verifica si es un elemento de entrada
    const isInputElement = activeElement.matches(
      'input, textarea, [contenteditable="true"], select'
    );
    
    if (!isInputElement) return;
    
    // Verifica exclusiones
    const isExcluded = excludeSelectors.some(selector => 
      activeElement.matches(selector)
    );
    
    if (isExcluded) return;
    
    // Cierra el teclado
    if (delay > 0) {
      setTimeout(() => activeElement.blur(), delay);
    } else {
      activeElement.blur();
    }
  }, [delay, excludeSelectors]);

  // Función para verificar si estamos en el fondo del scroll
  const checkIfAtBottom = useCallback((element) => {
    if (element === window) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      return scrollTop + windowHeight >= documentHeight - 10; // 10px de tolerancia
    } else {
      return element.scrollTop + element.clientHeight >= element.scrollHeight - 10;
    }
  }, []);

  useEffect(() => {
    // Solo aplica en dispositivos táctiles si está habilitado
    if (touchOnly) {
      const isTouchDevice = 'ontouchstart' in window || 
                            navigator.maxTouchPoints > 0 ||
                            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (!isTouchDevice) return;
    }

    const targetElement = container?.current || window;
    
    const handleScroll = () => {
      const currentScrollTop = targetElement === window 
        ? window.pageYOffset || document.documentElement.scrollTop
        : targetElement.scrollTop;
      
      // Actualizar si estamos en el fondo
      isAtBottom.current = checkIfAtBottom(targetElement);
      
      // Verificar si hay movimiento de scroll significativo
      const hasScrollMovement = Math.abs(currentScrollTop - lastScrollTop.current) > 10;
      
      // Solo cerrar el teclado si:
      // 1. No hay un focus muy reciente (más de 2 segundos), Y
      // 2. Hay movimiento de scroll real, Y
      // 3. No estamos en el fondo O no hay focus reciente
      if (!recentInputFocus.current && hasScrollMovement && 
          (!isAtBottom.current || !recentInputFocus.current)) {
        closeKeyboard();
      }
      
      // Resetear el flag de focus reciente después de un scroll real
      if (hasScrollMovement) {
        recentInputFocus.current = false;
      }
      
      lastScrollTop.current = currentScrollTop;
    };

    // Listener para detectar cuando se hace focus en un input
    const handleFocusIn = (e) => {
      const isInputElement = e.target.matches(
        'input, textarea, [contenteditable="true"], select'
      );
      
      if (isInputElement) {
        // Marcar que hay un focus reciente con tiempo extendido
        recentInputFocus.current = true;
        
        // Limpiar timeout anterior si existe
        if (focusTimeoutRef.current) {
          clearTimeout(focusTimeoutRef.current);
        }
        
        // Resetear el flag después de más tiempo para permitir 
        // que useScrollVirtualKeyboard haga su trabajo
        focusTimeoutRef.current = setTimeout(() => {
          recentInputFocus.current = false;
        }, 2000); // 2 segundos de gracia (más tiempo)
      }
    };

    // Usar passive para mejor rendimiento en scroll
    targetElement.addEventListener('scroll', handleScroll, { 
      passive: true 
    });
    
    // Escuchar eventos de focus en todo el documento
    document.addEventListener('focusin', handleFocusIn, { passive: true });

    return () => {
      targetElement.removeEventListener('scroll', handleScroll);
      document.removeEventListener('focusin', handleFocusIn);
      
      // Limpiar timeout si existe
      if (focusTimeoutRef.current) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, [container, touchOnly, closeKeyboard, checkIfAtBottom]);
}