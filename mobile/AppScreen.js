import React from 'react';
import {StatusBar} from 'react-native';
import MyTabs from './src/rootNavigation/tabNavigator/tabnavigator';

function AppScreen() {
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
