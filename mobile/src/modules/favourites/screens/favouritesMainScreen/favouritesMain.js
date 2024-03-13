import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavouritesScreen() {
  const [flatlistData, setflatlistData] = useState([]);

  useEffect(() => {
    const storagePromise = AsyncStorage.getItem('fav_Item_Array');
    storagePromise
      .then(data => {
        data ? setflatlistData(JSON.parse(data)) : null;
      })
      .catch(e => {
        console.log('asyncStorageError_favouritesScreen');
      });
  }, []);

  return (
    <>
      <Text style={styles.headerText}>Your Favourite Books</Text>
    </>
  );
}
