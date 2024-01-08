import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Accelerometer, Gyroscope, Magnetometer, DeviceMotion } from 'expo-sensors';
import { TabView, SceneMap } from 'react-native-tab-view';
import { initDatabase, saveData } from './src/services/database';
import SensorScreen from './src/components/SensorScreen';
import CustomTabBar from './src/components/TabBar';

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'accelerometer', title: 'Senores' },
  ]);

  const [accelerometerData, setAccelerometerData] = useState({});
  const [gyroscopeData, setGyroscopeData] = useState({});
  const [magnetometerData, setMagnetometerData] = useState({});
  const [deviceMotionData, setDeviceMotionData] = useState({});

  useEffect(() => {
    const sensors = [
      { sensor: Accelerometer, setData: setAccelerometerData },
      { sensor: Gyroscope, setData: setGyroscopeData },
      { sensor: Magnetometer, setData: setMagnetometerData },
      { sensor: DeviceMotion, setData: setDeviceMotionData },
    ];

    const sensorListeners = sensors.map(({ sensor, setData }) => {
      return sensor.addListener(data => {
        setData(data);
        const eventName = sensor._nativeEventName || 'UnknownSensor';   
        saveData(eventName, data);
      });
    });

    sensors.forEach(({ sensor }) => {
      sensor.setUpdateInterval(10000);
    });

    initDatabase();

    return () => {
      sensorListeners.forEach(listener => listener.remove());
    };
  }, []);

  const renderScene = SceneMap({
    accelerometer: () => <SensorScreen data={accelerometerData} />,
    gyroscope: () => <SensorScreen data={gyroscopeData} />,
    magnetometer: () => <SensorScreen data={magnetometerData} />,
    deviceMotion: () => <SensorScreen data={deviceMotionData} />,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={CustomTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
