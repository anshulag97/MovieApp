import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MoviesScreen from './Screens/MoviesScreen';
import SearchScreen from './Screens/SearchScreen';
import { SafeAreaView,Platform } from 'react-native';
import MoreDetailsScreen from './Screens/MoreDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';

import TvShowsScreen from './Screens/TvShowsScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Tabs}
            options={{
              headerStyle: {
                backgroundColor: 'gray',
              },
              headerTitle: 'Movies App',
              headerTitleStyle: {
                color: 'white',
              },
              headerTitleAlign: 'center',
              headerShown: true,
            }}
          />
          <Stack.Screen name="MoreDetailsScreen" component={MoreDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      }}
    >
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="TV Shows" component={TvShowsScreen} />
    </Tab.Navigator>
  )
}
