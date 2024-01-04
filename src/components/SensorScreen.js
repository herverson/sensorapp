import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const SensorScreen = ({ data }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  </SafeAreaView>
);

export default SensorScreen;