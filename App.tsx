/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import ProductListing from './src/screens/ProductListing';
import ProductDetail from './src/screens/ProductDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './src/navigation/DrawerNavigation';

 // Your navigators and screens
 const Stack = createStackNavigator();

 const RootContent = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
 }

const App = () => {
  return (
    <RootContent />
  );
}

const styles = StyleSheet.create({
});

export default App;
