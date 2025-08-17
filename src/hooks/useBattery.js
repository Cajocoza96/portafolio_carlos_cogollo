import { useState, useEffect } from 'react';

const useBattery = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: 1,
    charging: false,
    supported: false
  });

  useEffect(() => {
    let battery = null;

    const updateBatteryInfo = (batteryObj) => {
      setBatteryInfo({
        level: batteryObj.level,
        charging: batteryObj.charging,
        supported: true
      });
    };

    const initBattery = async () => {
      try {
        if ('getBattery' in navigator) {
          battery = await navigator.getBattery();
          updateBatteryInfo(battery);

          // Escuchar cambios en el nivel de batería
          battery.addEventListener('levelchange', () => updateBatteryInfo(battery));
          // Escuchar cambios en el estado de carga
          battery.addEventListener('chargingchange', () => updateBatteryInfo(battery));
        } else {
          // Fallback para dispositivos que no soportan Battery API
          setBatteryInfo({
            level: 1,
            charging: false,
            supported: false
          });
        }
      } catch (error) {
        console.warn('Battery API no está disponible:', error);
        setBatteryInfo({
          level: 1,
          charging: false,
          supported: false
        });
      }
    };

    initBattery();

    // Cleanup
    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', () => updateBatteryInfo(battery));
        battery.removeEventListener('chargingchange', () => updateBatteryInfo(battery));
      }
    };
  }, []);

  return batteryInfo;
};

export default useBattery;