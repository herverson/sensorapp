import { openDatabase } from 'expo-sqlite';

const db = openDatabase('sensorData.db');

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS sensorData (id INTEGER PRIMARY KEY AUTOINCREMENT, sensor TEXT, data TEXT);'
    );
  });
};

export const saveData = (sensorName, data) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO sensorData (sensor, data) VALUES (?, ?);',
      [sensorName, JSON.stringify(data)],
      (_, { insertId }) => {
        console.log('Data saved successfully with ID:', insertId);
      },
      (_, error) => {
        console.error('Error saving data:', error);
      }
    );
  });
};

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM sensorData ORDER BY id DESC;',
        [],
        (_, { rows }) => {
          const data = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(rows.item(i));
          }
          resolve(data);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};
