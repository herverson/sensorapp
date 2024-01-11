import { useEffect } from 'react';
import { Accelerometer, Gyroscope, Magnetometer, DeviceMotion } from 'expo-sensors';
import { initDatabase, saveData } from '../services/database';

const mapSensorName = (sensorName) => {
  switch (sensorName) {
    case 'deviceMotionDidUpdate':
      return 'Device Motion';
    case 'accelerometerDidUpdate':
      return 'Accelerometer';
    case 'magnetometerDidUpdate':
      return 'Magnetometer';
    case 'gyroscopeDidUpdate':
      return 'Gyroscope';
    default:
      return sensorName;
  }
};

const useSensorManager = (setDataCallback) => {
  useEffect(() => {
    const sensors = [
      { sensor: Accelerometer },
      { sensor: Gyroscope },
      { sensor: Magnetometer },
      { sensor: DeviceMotion },
    ];

    const sensorListeners = sensors.map(({ sensor }) => {
      return sensor.addListener((data) => {
        const eventName = sensor._nativeEventName || 'UnknownSensor';
        const sensorName = mapSensorName(eventName);
        setDataCallback(sensorName, data);
        saveData(sensorName, data);
      });
    });

    sensors.forEach(({ sensor }) => {
      sensor.setUpdateInterval(4000);
    });

    initDatabase();

    return () => {
      sensorListeners.forEach((listener) => listener.remove());
    };
  }, [setDataCallback]);
};

export default useSensorManager;
