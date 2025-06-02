/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddBookScreen from './src/screens/AddBookScreen';
import EditBookScreen from './src/screens/EditBookScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddBook" component={AddBookScreen} />
        <Stack.Screen name="EditBook" component={EditBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
