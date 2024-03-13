import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ParentSearchScreen from '../screens/parentSearcScreen/parentSearchScreen';
import MainBookPage from '../../details/screens/mainBookPage/mainBookPage';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="ParentSearch">
      <Stack.Screen
        name="ParentSearch"
        component={ParentSearchScreen}
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
