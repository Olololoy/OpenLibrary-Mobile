import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import AppScreen from './AppScreen';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  //TODO: DM
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <SafeAreaView
        // style={backgroundStyle} //TODO: DM
        style={{flex: 1, backgroundColor: 'white'}}>
        <AppScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
