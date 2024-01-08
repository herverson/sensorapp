import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { fetchData } from '../services/database';

const SensorScreen = React.memo(() => {
  const [dataList, setDataList] = useState([]);

  const fetchDataFromDatabase = async () => {
    try {
      const dataFromDB = await fetchData();
      setDataList(dataFromDB);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchDataFromDatabase();
  }, []); 

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.dataContainer}>
      <Text style={styles.label}>{`ID ${item.id}:`}</Text>
      <Text style={styles.value}>{`${item.sensor}: ${item.data}`}</Text>
    </View>
  );

  return (
    <FlatList
      data={dataList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      extraData={dataList}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
});


export default SensorScreen;
