import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import HomeScreen from '../../modules/home/screens/parentHomeScreen/homeScreen';
// import ParentSearchScreen from '../../modules/search/screens/parentSearcScreen/parentSearchScreen';
// import FavouritesScreen from '../../modules/favourites/screens/favouritesMainScreen/favouritesMain';
import SearchStack from '../../modules/search/navigation/searchStack';
import HomeScreenStack from '../../modules/home/navigation/HomeScreenStack';
import FavouritesStack from '../../modules/favourites/navigation/favouritesStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
