import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import useSensorManager from './src/managers/SensorManager';
import SensorScreen from './src/components/SensorScreen';
import CustomTabBar from './src/components/TabBar';

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: 'sensors', title: 'Sensors' }]);
  const [sensorData, setSensorData] = useState({});

  useSensorManager(setSensorData);

  const renderScene = SceneMap({
    sensors: () => <SensorScreen data={sensorData} />,
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
