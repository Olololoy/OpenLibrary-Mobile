import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainBookPage from '../../details/screens/mainBookPage/mainBookPage';
import FavouritesScreen from '../screens/favouritesMainScreen/favouritesMain';

const Stack = createStackNavigator();

export default function FavouritesStack() {
  return (
    <Stack.Navigator initialRouteName="MainBookPage">
      <Stack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
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
