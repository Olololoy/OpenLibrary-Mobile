import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainBookPage from '../../details/screens/mainBookPage/mainBookPage';
import HomeScreen from '../screens/parentHomeScreen/homeScreen';

const Stack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainBookPage"
        component={MainBookPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
