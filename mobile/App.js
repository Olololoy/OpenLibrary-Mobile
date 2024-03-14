import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import AppScreen from './AppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {GrayBookmark, YellowBookmark} from './src/assets/svgs';

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
    // <GrayBookmark width="100" height="100" />
  );
}

export default App;
