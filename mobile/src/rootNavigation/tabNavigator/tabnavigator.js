import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import HomeScreen from '../../modules/home/screens/parentHomeScreen/homeScreen';
// import ParentSearchScreen from '../../modules/search/screens/parentSearcScreen/parentSearchScreen';
// import FavouritesScreen from '../../modules/favourites/screens/favouritesMainScreen/favouritesMain';
import SearchStack from '../../modules/search/navigation/searchStack';
import HomeScreenStack from '../../modules/home/navigation/HomeScreenStack';
import FavouritesStack from '../../modules/favourites/navigation/favouritesStack';
import {ScaledSheet, ms, mvs} from 'react-native-size-matters/extend';
import {
  HomeTabSelected,
  HomeTabNotSelected,
  SearchTabSelected,
  SearchTabUnSelected,
  FavouriteTabSelected,
  FavouriteTabUnSelected,
} from '../../assets/svgs';

const Tab = createBottomTabNavigator();

const tabBarStyles = ScaledSheet.create({
  // borderBottomLeftRadius: '40@ms',
  borderTopLeftRadius: '30@ms',
  borderTopRightRadius: '30@ms',

  height: '67@mvs',
  position: 'absolute',
});

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return focused ? (
                <HomeTabSelected height={mvs(30)} width={mvs(30)} />
              ) : (
                <HomeTabNotSelected height={mvs(30)} width={mvs(30)} />
              );
            case 'Search':
              return focused ? (
                <SearchTabSelected height={mvs(30)} width={mvs(30)} />
              ) : (
                <SearchTabUnSelected height={mvs(30)} width={mvs(30)} />
              );
            case 'Favourites':
              return focused ? (
                <FavouriteTabSelected height={mvs(27)} width={mvs(27)} />
              ) : (
                <FavouriteTabUnSelected height={mvs(27)} width={mvs(27)} />
              );
          }
        },
        tabBarStyle: tabBarStyles,
        tabBarHideOnKeyboard: true,
      })}>
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
