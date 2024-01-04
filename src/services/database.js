import { openDatabase } from 'expo-sqlite';

const db = openDatabase('sensorData.db');

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS sensorData (id INTEGER PRIMARY KEY AUTOINCREMENT, sensor TEXT, data TEXT);'
    );
  });
};

export const saveData = (sensor, data) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO sensorData (sensor, data) VALUES (?, ?);',
      [sensor, JSON.stringify(data)]
    );
  });
};
