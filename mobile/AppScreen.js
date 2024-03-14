import React from 'react';
import {StatusBar} from 'react-native';
import MyTabs from './src/rootNavigation/tabNavigator/tabnavigator';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AppScreen() {
  /*
    ClearsAll async Storage Data
  */

  // useEffect(() => {
  //   const storagePromise = AsyncStorage.getItem('fav_Item_Map');

  //   storagePromise
  //     .then(data => {
  //       console.log('AsyncStorageData', data);
  //       return AsyncStorage.clear();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       return AsyncStorage.getItem('fav_Item_Map');
  //     })
  //     .then(data => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <>
      <MyTabs />
      <StatusBar
      //TODO: DM
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
    </>
  );
}

export default AppScreen;
