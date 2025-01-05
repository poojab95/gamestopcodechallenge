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
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
    <Provider store={store}>
    <RootContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
});

export default App;
