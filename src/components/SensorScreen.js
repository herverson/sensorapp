import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SensorScreen = ({ data }) => {
  return (
    <View style={styles.container}>
      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={styles.dataContainer}>
          <Text style={styles.label}>{key}:</Text>
          <Text style={styles.value}>{JSON.stringify(value)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {},
});

export default SensorScreen;