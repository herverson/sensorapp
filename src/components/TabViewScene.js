import React from 'react';
import SensorScreen from './SensorScreen';

const createTabViewScene = (accelerometerData, gyroscopeData, magnetometerData, deviceMotionData) => ({
  accelerometer: () => <SensorScreen data={accelerometerData} />,
  gyroscope: () => <SensorScreen data={gyroscopeData} />,
  magnetometer: () => <SensorScreen data={magnetometerData} />,
  deviceMotion: () => <SensorScreen data={deviceMotionData} />,
});

export default createTabViewScene;
