/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppScreen from './AppScreen';



function App() {
  //TODO: DM
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView 
    // style={backgroundStyle} //TODO: DM
    style={{flex: 1, backgroundColor: 'white'}}
    >
      <StatusBar
      //TODO: DM
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppScreen/>
    </SafeAreaView>
  );
}

export default App;
